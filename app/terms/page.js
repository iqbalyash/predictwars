import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Terms and Conditions | PredictWars",
  description:
    "Terms and conditions for use of PredictWars.com: use of website, content accuracy, intellectual property, and limitation of liability.",
  openGraph: { title: "Terms and Conditions | PredictWars", type: "website" },
};

export default function TermsPage() {
  return (
    <div className="pw-home min-h-screen">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <article className="space-y-10">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: March 2026
            </p>
          </header>

          <div className="space-y-8 text-slate-300">
            <p className="leading-relaxed">
              By accessing and using PredictWars.com, you agree to these Terms and Conditions. If you do not
              agree, please do not use the website.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Use of Website
              </h2>
              <p className="mt-3 leading-relaxed">
                PredictWars.com is provided for informational and educational purposes. You may use the
                website only for lawful purposes and in a manner that does not infringe the rights of others or
                restrict their use of the site. You may not use the website to transmit harmful code, attempt
                unauthorized access, or use automated means to scrape or collect data without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Content Accuracy
              </h2>
              <p className="mt-3 leading-relaxed">
                We strive to provide accurate and up-to-date information, but PredictWars does not guarantee
                the accuracy, completeness, or reliability of any content. Geopolitical analysis and
                forecasts are subject to change. Content on this website is not professional advice and
                should not be relied upon as such.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Intellectual Property
              </h2>
              <p className="mt-3 leading-relaxed">
                All content on PredictWars.com, including text, graphics, logos, and design, is owned by
                PredictWars or its licensors and is protected by copyright and other intellectual property
                laws. You may view and print pages for personal, non-commercial use only. You may not
                reproduce, distribute, modify, or create derivative works without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                External Links
              </h2>
              <p className="mt-3 leading-relaxed">
                The website may contain links to third-party sites. We do not control and are not responsible
                for the content, privacy practices, or availability of those sites. Linking to an external
                site does not imply endorsement. You access external links at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Limitation of Liability
              </h2>
              <p className="mt-3 leading-relaxed">
                To the fullest extent permitted by law, PredictWars and its operators shall not be liable for
                any direct, indirect, incidental, consequential, or special damages arising from your use of
                the website or reliance on its content. Your use of the website and any information on it is
                at your sole risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Changes to Terms
              </h2>
              <p className="mt-3 leading-relaxed">
                We reserve the right to update or modify these Terms and Conditions at any time. Changes will
                be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of
                the website after changes constitutes acceptance of the revised terms.
              </p>
            </section>
          </div>

          <p className="pt-4 text-sm text-slate-400">
            For questions about these Terms and Conditions, please contact us via our{" "}
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
