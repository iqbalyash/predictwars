import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy | PredictWars",
  description:
    "PredictWars privacy policy: how we collect and protect visitor information, use of cookies, and third-party services including Google AdSense.",
  openGraph: { title: "Privacy Policy | PredictWars", type: "website" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pw-home min-h-screen">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <article className="space-y-10">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: March 2026
            </p>
          </header>

          <div className="space-y-8 text-slate-300">
            <p className="leading-relaxed">
              PredictWars respects user privacy and protects visitor information. This policy describes how we
              collect, use, and safeguard information when you use our website.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Information We Collect
              </h2>
              <p className="mt-3 leading-relaxed">
                We may collect information you provide voluntarily (for example, when using a contact form or
                emailing us) and information collected automatically when you visit, such as your IP address,
                browser type, device information, and pages visited. This helps us operate the site and improve
                the user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Cookies
              </h2>
              <p className="mt-3 leading-relaxed">
                We use cookies and similar technologies to remember preferences, understand how the site is
                used, and improve performance. You can control or disable cookies through your browser
                settings. Disabling cookies may affect some features of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Third-Party Advertising
              </h2>
              <p className="mt-3 leading-relaxed">
                PredictWars may display advertising provided by third parties, including Google AdSense. These
                services may use cookies to serve ads based on your visits to this site and other sites on the
                internet. You can disable personalized advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline"
                >
                  https://adssettings.google.com
                </a>
                . We do not control the data practices of these advertisers; please review their privacy
                policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Third-Party Links
              </h2>
              <p className="mt-3 leading-relaxed">
                Our website may contain links to external sites. We are not responsible for the privacy
                practices or content of those sites. We encourage you to read the privacy policies of any
                third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Changes to Policy
              </h2>
              <p className="mt-3 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with
                an updated &quot;Last updated&quot; date. Your continued use of the website after changes
                constitutes acceptance of the revised policy.
              </p>
            </section>
          </div>

          <p className="pt-4 text-sm text-slate-400">
            If you have questions about this Privacy Policy, please contact us via our{" "}
            <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline">
              contact page
            </Link>
            .
          </p>
        </article>
      </main>
    </div>
  );
}
