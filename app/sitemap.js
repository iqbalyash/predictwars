import { posts } from "@/data/posts";

const BASE_URL = "https://www.predictwars.com";

export const dynamic = "force-static";

export default function sitemap() {
  const staticPages = [
    "",
    "/early-warning-signals",
    "/explore-conflict-predictions",
    "/explore-global-risk-index",
    "/explore-geopolitical-forecasting",
    "/learn-forecasting-methods",
    "/deep-geopolitical-analysis",
    "/trending-conflicts",
    "/updates",
    "/contact",
    "/disclaimer",
    "/privacy-policy",
    "/terms",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${BASE_URL}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/updates" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/updates" ? 0.9 : 0.8,
  }));

  const articleUrls = posts.map((post) => ({
    url: `${BASE_URL}/updates/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...articleUrls];
}
