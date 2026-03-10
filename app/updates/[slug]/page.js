import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import ShareButtons from "@/components/ShareButtons";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const slug = typeof resolved.slug === "string" ? resolved.slug : resolved.slug?.[0] ?? "";
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found | PredictWars" };
  const baseUrl = "https://www.predictwars.com";
  const metadata = {
    title: `${post.title} | PredictWars`,
    description: post.excerpt,
    alternates: { canonical: `${baseUrl}/updates/${slug}` },
    openGraph: {
      title: `${post.title} | PredictWars`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${baseUrl}/updates/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | PredictWars`,
      description: post.excerpt,
    },
    robots: { maxImagePreview: "large" },
  };
  if (post.image) {
    metadata.openGraph.images = [{ url: `${baseUrl}${post.image}`, width: 1200, height: 630, alt: post.title }];
  }
  return metadata;
}

function HeroImage({ title, src, alt }) {
  const seoAlt = alt || title;
  if (src) {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1200/630" }}>
        <Image
          src={src}
          alt={seoAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    );
  }
  return (
    <div
      className="w-full bg-gradient-to-br from-slate-700 to-slate-800"
      style={{ aspectRatio: "1200/630" }}
      aria-hidden
    >
      <div className="flex h-full min-h-[280px] items-center justify-center p-8 sm:min-h-[320px]">
        <span className="text-center text-lg font-medium text-slate-500">{title}</span>
      </div>
    </div>
  );
}

function parseInlineLinks(str, keyPrefix) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let m;
  let i = 0;
  while ((m = re.exec(str)) !== null) {
    if (m.index > lastIndex) {
      parts.push(str.slice(lastIndex, m.index));
    }
    parts.push(
      <Link
        key={`${keyPrefix}-link-${i++}`}
        href={m[2]}
        className="text-sky-400 underline hover:text-sky-300"
      >
        {m[1]}
      </Link>
    );
    lastIndex = re.lastIndex;
  }
  if (lastIndex < str.length) {
    parts.push(str.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [str];
}

function ArticleContent({ content }) {
  const blocks = content.split("\n\n").filter((b) => b.trim());
  return (
    <div className="space-y-6 text-slate-300">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="mt-8 text-lg font-semibold text-white">
              {trimmed.slice(4)}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="mt-10 text-xl font-semibold text-white first:mt-0">
              {trimmed.slice(3)}
            </h2>
          );
        }
        return (
          <p key={i} className="leading-relaxed">
            {parseInlineLinks(trimmed, `p-${i}`)}
          </p>
        );
      })}
    </div>
  );
}

export default async function PostPage({ params }) {
  const resolved = await params;
  const slug = typeof resolved.slug === "string" ? resolved.slug : resolved.slug?.[0] ?? "";
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pw-home min-h-screen">
        <main className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-slate-400">Post not found.</p>
          <Link
            href="/updates"
            className="mt-4 inline-block text-sky-400 hover:text-sky-300"
          >
            ← Back to Updates
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="pw-home min-h-screen">
      <article>
        {/* Hero / featured image - large for Google Discover */}
        <header className="overflow-hidden border-b border-slate-700/50">
          <HeroImage title={post.title} src={post.image} alt={post.title} />
        </header>

        <main className="mx-auto max-w-3xl px-4 py-10 sm:py-12">
          <Link
            href="/updates"
            className="inline-block text-sm font-medium text-sky-400 hover:text-sky-300"
          >
            ← Updates
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="mt-2 text-lg text-slate-400">
              {post.subtitle}
            </p>
          )}
          <p className="mt-3 text-sm text-slate-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <section className="mt-10 border-t border-slate-700/50 pt-10 pw-glass rounded-2xl p-6 sm:p-8">
            <ArticleContent content={post.content} />
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-700/50 pt-10">
            <ShareButtons
              title={post.title}
              url={`https://www.predictwars.com/updates/${slug}`}
            />
          </div>

          <nav className="mt-12 rounded-2xl pw-glass border border-slate-600/50 p-6 sm:p-8" aria-label="Related reading">
            <h2 className="text-lg font-semibold text-white mb-4">Explore more</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/explore-conflict-predictions" className="text-sky-400 hover:text-sky-300">
                  Explore Conflict Predictions
                </Link>
              </li>
              <li>
                <Link href="/explore-global-risk-index" className="text-sky-400 hover:text-sky-300">
                  Global Conflict Risk Index
                </Link>
              </li>
              <li>
                <Link href="/updates/how-prediction-markets-forecast-wars" className="text-sky-400 hover:text-sky-300">
                  Prediction Markets Forecast Wars
                </Link>
              </li>
              <li>
                <Link href="/early-warning-signals" className="text-sky-400 hover:text-sky-300">
                  Early Warning Signals of War
                </Link>
              </li>
            </ul>
          </nav>

          <section className="mt-10" aria-labelledby="related-articles-heading">
            <h2 id="related-articles-heading" className="text-lg font-semibold text-white mb-4">Related articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {posts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((p) => (
                  <article
                    key={p.slug}
                    className="pw-glass border border-slate-600/50 p-4 rounded-2xl flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        <Link
                          href={`/updates/${p.slug}`}
                          className="hover:text-sky-300"
                        >
                          {p.title}
                        </Link>
                      </h3>
                      {p.excerpt && (
                        <p className="mt-2 text-xs text-slate-400 line-clamp-3">
                          {p.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="mt-3">
                      <Link
                        href={`/updates/${p.slug}`}
                        className="text-xs font-medium text-sky-400 hover:text-sky-300"
                      >
                        Read analysis →
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        </main>
      </article>
      {/* Article + Breadcrumb schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image ? `https://www.predictwars.com${post.image}` : undefined,
            datePublished: post.date,
            publisher: { "@type": "Organization", name: "PredictWars", url: "https://www.predictwars.com" },
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.predictwars.com/updates/${slug}` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Updates", item: "https://www.predictwars.com/updates" },
              { "@type": "ListItem", position: 2, name: post.title, item: `https://www.predictwars.com/updates/${slug}` },
            ],
          }),
        }}
      />
    </div>
  );
}
