// page.tsx for ImagePaletteExtractor
import ImagePaletteExtractor from "@/components/ImagePaletteExtractor";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import TopMenu from "@/components/TopMenu";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const baseUrl = `${hostUrl}/image-palette-extractor`;

  return {
    title: "Image Palette Extractor - Extract Colors from Images",
    description:
      "Free online image palette extractor tool. Extract dominant colors from any image. Get HEX, RGB, and HSL color codes.",
    keywords: [
      "image palette extractor",
      "color extraction",
      "image colors",
      "color palette generator",
      "dominant colors",
    ],
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: "Image Palette Extractor - Extract Colors from Images",
      description:
        "Free online tool to extract color palettes from images. Upload any image and get the dominant colors.",
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${hostUrl}/image-palette-extractor-1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Image Palette Extractor Tool",
        },
      ],
      siteName: "Color Tools",
    },
  };
}

export default async function ImagePaletteExtractorPage() {
  const hostUrl = await getHostUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image Palette Extractor",
    description:
      "Extract color palettes from images. Upload an image and get the dominant colors with their HEX, RGB, and HSL values.",
    url: hostUrl + "/image-palette-extractor",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Extract dominant colors from images",
      "Support for JPG, PNG, GIF, WEBP formats",
      "Get HEX, RGB, HSL color codes",
      "Color percentage distribution",
    ],
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
        <h1 className="mb-4 text-center">Image Palette Extractor</h1>
        <ImagePaletteExtractor />
      </div>
    </>
  );
}
