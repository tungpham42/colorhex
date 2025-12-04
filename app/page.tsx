// page.tsx for Home
import Home from "@/components/Home";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();

  return {
    title: "Color Tools - Free Online Color Utilities",
    description:
      "Free online color tools including color mixer, palette extractor, color converter and more. No registration required.",
    keywords: [
      "color tools",
      "color mixer",
      "palette extractor",
      "color converter",
      "hex color",
    ],
    alternates: {
      canonical: hostUrl,
    },
    openGraph: {
      title: "Color Tools - Free Online Color Utilities",
      description:
        "Free online color tools including color mixer, palette extractor, color converter and more.",
      type: "website",
      url: hostUrl,
      images: [
        {
          url: `${hostUrl}/1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Color Tools Website",
        },
      ],
      siteName: "Color Tools",
    },
  };
}

export default async function HomePage() {
  const hostUrl = await getHostUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Color Tools",
    description:
      "Free online color tools including color mixer, palette extractor, color converter and more.",
    url: hostUrl,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "Soft.io.vn",
      url: "https://soft.io.vn",
    },
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
