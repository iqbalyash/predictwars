import { Inter, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learn How to Predict Global Conflicts and Geopolitical Events",
  description:
    "PredictWars helps you learn geopolitical forecasting and global conflict prediction. Explore early warning signs, prediction markets, and risk analysis.",
  metadataBase:
    typeof window === "undefined"
      ? new URL("https://www.predictwars.com")
      : new URL(window.location.origin),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: { maxImagePreview: "large" },
  verification: {
    google: "APp84xEubrUcPdWTB9sJYpSvR4nPOTeL6lJCvRmbu3Q",
  },
  icons: {
    icon: "/Predict-wars-icon.png",
  },
  openGraph: {
    title: "Learn How to Predict Global Conflicts and Geopolitical Events",
    description:
      "Geopolitical forecasting and conflict prediction. Explore early warning signs, prediction markets, and global risk analysis.",
    url: "https://www.predictwars.com",
    siteName: "PredictWars",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn How to Predict Global Conflicts and Geopolitical Events",
    description:
      "Geopolitical forecasting and conflict prediction. Early warning signs, prediction markets, and global risk analysis.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.predictwars.com/#organization",
                  name: "PredictWars",
                  url: "https://www.predictwars.com",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.predictwars.com/#website",
                  url: "https://www.predictwars.com",
                  name: "PredictWars",
                  publisher: { "@id": "https://www.predictwars.com/#organization" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
