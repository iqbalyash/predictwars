# Cloudflare Pages — build settings

Use these settings when connecting this repo to **Cloudflare Pages** (not Workers).

| Setting | Value |
|--------|--------|
| **Framework preset** | **Next.js (Static HTML Export)** |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | (leave blank) |
| **Deploy command** | (leave blank — Pages uploads `out` automatically) |

- This project uses `output: "export"` in `next.config.js` and builds to the `out/` directory.
- Do **not** use the generic "Next.js" preset (that uses Workers/OpenNext). Choose **Next.js (Static HTML Export)**.
- Node version is set via `.nvmrc` (20).
