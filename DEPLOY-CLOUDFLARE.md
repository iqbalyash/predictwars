# Deploy PredictWars to Cloudflare Pages

This project is **configured for Cloudflare Pages** (static export). Build settings are in [.cloudflare/pages-build-config.md](.cloudflare/pages-build-config.md).

This app uses **Next.js static export** (`output: "export"`). It must be deployed as a **static site** on **Cloudflare Pages**, not on Cloudflare Workers.

If deployment failed with an error about `.next/standalone` or `pages-manifest.json`, Cloudflare is running **`npx wrangler deploy`**, which triggers Workers + OpenNext. Fix it using either option below.

---

## Fix without creating a new project (change deploy command)

Your build **succeeds** (`npm run build` → `out/` is created). The failure happens at **deploy** because Cloudflare runs `npx wrangler deploy`, which then reports “Missing entry-point” or “assets directory”.

**Option A — Use the repo’s config**  
The repo’s `wrangler.toml` is set up so `npx wrangler deploy` deploys the `out/` folder. Ensure the **latest** `wrangler.toml` is committed and pushed to GitHub, then retry the deployment.

**Option B — Override the deploy command**  
In **Settings** → **Builds & deployments**, set the deploy command to:
```bash
npx wrangler deploy --assets=./out
```
Build command stays `npm run build`; build output directory stays `out`.

**Option C — Use Pages instead**  
Replace the deploy command with:
```bash
npx wrangler pages deploy out --project-name=predictwars
```
(Requires a Pages project named `predictwars` to exist.)

Or follow Option 1 below to create a new Pages project and use **Next.js (Static HTML Export)** with no custom deploy command.

---

## Option 1: New Cloudflare Pages project (recommended if the above isn’t available)

### Step 1: Create a **Pages** project (not Workers)

1. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to **Workers & Pages**.
2. Click **Create application** → open the **Pages** tab → **Connect to Git**.
3. Select your GitHub account and the **predictwars** repository.
4. **Do not** choose “Workers” or a setup that asks to run Wrangler/OpenNext.

### Step 2: Build configuration

In **Build configuration**, set these exactly:

| Setting | Value |
|--------|--------|
| **Framework preset** | **Next.js (Static HTML Export)** |
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |

- Do **not** set a custom deploy command. Pages will run the build and then upload the contents of `out` automatically.

### Step 3: Deploy

Click **Save and Deploy**.

---

## Option 2: Deploy from your machine (Wrangler CLI)

After building once, you can deploy the static output to an existing Pages project:

```bash
npm run build
npx wrangler pages deploy out --project-name=predictwars
```

If the project does not exist yet, create it in the dashboard first (Workers & Pages → Create → Pages → Create project), then run the command above.

---

## If you already created a Workers project

Workers + OpenNext expect a **server** build. This repo is **static only**. Create a **new** **Pages** project (not Workers), connect the same GitHub repo, and use Option 1 settings. You can delete or ignore the old Workers project.

---

## Troubleshooting: "Deploy failed again"

1. **Check the deploy command**  
   Project → **Settings** → **Builds & deployments**. If the deploy command is **`npx wrangler deploy`** (or mentions OpenNext), you are on the **Workers** path. Create a **new** **Pages** project and use **Next.js (Static HTML Export)** with build output **`out`**.

2. **Build output directory** must be **`out`** (not `.next` or `dist`). The preset "Next.js (Static HTML Export)" sets this.

3. **Share the exact error**  
   Copy the **full build log** from the failed deployment (Deployments → failed run → View build log) and share it. The message will show whether the failure is Workers/OpenNext or the static build.
