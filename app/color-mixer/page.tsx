// page.tsx for ColorMixer
import ColorMixer from "@/components/ColorMixer";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import TopMenu from "@/components/TopMenu";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const baseUrl = `${hostUrl}/color-mixer`;

  return {
    title: "Color Mixer - Blend and Create Colors Online",
    description:
      "Free online color mixer tool. Blend two or more colors to create new colors with HEX, RGB, and HSL values.",
    keywords: [
      "color mixer",
      "color blender",
      "color combination",
      "hex color mixer",
      "rgb color mixer",
    ],
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: "Color Mixer - Blend and Create Colors Online",
      description:
        "Free online color mixer tool. Blend colors to create new shades with HEX, RGB, and HSL values.",
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${hostUrl}/color-mixer-1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Color Mixer Tool Interface",
        },
      ],
      siteName: "Color Tools",
    },
  };
}

export default async function ColorMixerPage() {
  const hostUrl = await getHostUrl();
  const baseUrl = `${hostUrl}/color-mixer`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Color Mixer",
    description:
      "Blend two or more colors to create new colors with HEX, RGB, and HSL values.",
    url: baseUrl,
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
      <div className="container mt-0">
        <TopMenu />
        <h1 className="mb-4 text-center">Color Mixer</h1>
        <ColorMixer />
      </div>
    </>
  );
}
