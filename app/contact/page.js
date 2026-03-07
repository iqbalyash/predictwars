export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Contact
        </h1>
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Last updated: March 2026
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          If you have questions about the content on PredictWars.com, or about
          our disclaimer, privacy policy, or terms and conditions, you can reach
          us using the contact details below.
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          For general inquiries, feedback, or correction requests, please send
          us a message using this form or email us at{" "}
          <a
            href="mailto:contact@predictwars.com"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            contact@predictwars.com
          </a>
          .
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium uppercase tracking-[0.16em] text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium uppercase tracking-[0.16em] text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium uppercase tracking-[0.16em] text-zinc-700 dark:text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}

