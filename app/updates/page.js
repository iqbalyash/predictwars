import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Updates | Geopolitical Forecasting & Conflict Analysis | PredictWars",
  description:
    "Analytical articles on early warning signs of war, military buildup indicators, global conflict risk, and how prediction markets forecast geopolitical events.",
  alternates: { canonical: "https://www.predictwars.com/updates" },
  openGraph: {
    title: "Updates | PredictWars",
    description: "Geopolitical forecasting and conflict analysis. Early warning signs, risk indices, and prediction markets.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Updates | PredictWars",
    description: "Geopolitical forecasting and conflict analysis. Early warning signs, risk indices, and prediction markets.",
  },
};

function ArticleThumbnail({ title, image }) {
  if (image) {
    return (
      <div className="relative h-48 w-full overflow-hidden sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    );
  }
  return (
    <div
      className="h-48 w-full bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 group-hover:from-slate-600 group-hover:to-slate-700 sm:h-52"
      aria-hidden
    >
      <div className="flex h-full items-center justify-center p-4">
        <span className="text-center text-sm font-medium text-slate-500 line-clamp-2">{title}</span>
      </div>
    </div>
  );
}

export default function UpdatesPage() {
  return (
    <div className="pw-home min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-6 lg:px-8">
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-slate-600/50">
          <div className="relative aspect-[21/9] w-full min-h-[180px] sm:min-h-[220px]">
            <Image
              src="/Updates-Global-Conflicts.png"
              alt="Updates on global conflicts and geopolitical forecasting"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Updates
          </h1>
          <p className="mt-3 text-slate-400">
            Analytical articles on prediction markets, geopolitical forecasting, early warning signs, and global
            conflict risk analysis.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-slate-400">No articles yet. Check back soon.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2" role="list">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/updates/${post.slug}`}
                  className="pw-card-hover group block overflow-hidden rounded-2xl border border-slate-600/50 bg-[#132238] shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
                >
                  <ArticleThumbnail title={post.title} image={post.image} />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white transition group-hover:text-sky-300">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
                      {post.excerpt}
                    </p>
                    <span className="pw-btn-glossy mt-4 inline-flex items-center rounded-xl bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-400 transition hover:bg-sky-500/30">
                      Read More
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
