import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import ConsultingHeader from "@/components/ConsultingHeader";
import ConsultingFooter from "@/components/ConsultingFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const SITE_URL = "https://prestigeconsultingllc.com";
const SITE_NAME = "Prestige Consulting LLC";
const DEFAULT_TITLE = "Prestige Consulting LLC — B2B Growth & Operations Consulting";
const DEFAULT_DESCRIPTION =
  "Prestige Consulting is a B2B consulting firm. We book qualified sales meetings via cold email, LinkedIn, and multi-channel outreach — and help you document SOPs and streamline operations so your business runs smoothly behind the scenes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "B2B appointment setting",
    "outsourced SDR",
    "cold email outreach",
    "LinkedIn lead generation",
    "B2B lead generation",
    "sales development representative",
    "pipeline generation",
    "qualified meetings",
    "outbound sales",
    "B2B sales consulting",
    "appointment setting service",
    "SOP documentation",
    "operations consulting",
    "business process consulting",
    "Prestige Consulting",
  ],
  authors: [{ name: "Prestige Consulting LLC" }],
  creator: "Prestige Consulting LLC",
  publisher: "Prestige Consulting LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Done-for-you B2B appointment setting. We build your outbound system, run outreach, and deliver qualified meetings — you close.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: DEFAULT_DESCRIPTION,
      serviceType: [
        "B2B Appointment Setting",
        "Cold Email Outreach",
        "LinkedIn Lead Generation",
        "Multi-Channel Sales Outreach",
        "SDR as a Service",
        "SOP & Process Documentation",
        "Operations Consulting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
          <a
            href="#main-content"
            className="absolute top-[-100px] left-4 z-[9999] inline-flex items-center gap-2 rounded-full text-sm font-semibold px-5 py-2.5 transition-[top] duration-200 focus:top-4"
            style={{ background: "#C9A227", color: "#2A2410" }}
          >
            Skip to main content
          </a>
          <ConsultingHeader />
          <main id="main-content">{children}</main>
          <ConsultingFooter />
        </body>
    </html>
  );
}
