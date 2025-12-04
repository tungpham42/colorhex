// page.tsx for color detail (simplified)
import { redirect } from "next/navigation";
import {
  parseColor,
  getColorFormats,
  getShades,
  getTints,
  getComplement,
  getTriadic,
  getAnalogous,
  getSplitComplement,
  getMonochromatic,
  getTetradic,
} from "@/utils/colorUtils";
import ColorCard from "@/components/ColorCard";
import ColorFormats from "@/components/ColorFormats";
import ColorPalette from "@/components/ColorPalette";
import ColorSearchForm from "@/components/ColorSearchForm";
import RgbChart from "@/components/RgbChart";
import CmykChart from "@/components/CmykChart";
import Link from "next/link";
import { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faReddit,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Ratio } from "react-bootstrap";
import TopMenu from "@/components/TopMenu";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ color: string }>;
}): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const paramsResolved = await params;
  const color = parseColor(paramsResolved.color);
  const hex = color?.toHexString() || "#000000";
  const hexClean = hex.replace("#", "");
  const colorName = color?.toName();
  const baseUrl = `${hostUrl}/${colorName || hexClean}`;

  return {
    title: `${hex} Color - Details and Palettes`,
    description: `Detailed information about color ${hex} including RGB, HSL, CMYK values, shades, tints, and complementary colors.`,
    keywords: [
      `color ${hex}`,
      hex,
      `${hex} rgb`,
      `${hex} hex`,
      `color palette ${hex}`,
    ],
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: `${hex} Color - Details and Palettes`,
      description: `Detailed information about color ${hex} including RGB, HSL, CMYK values.`,
      type: "website",
      url: baseUrl,
      siteName: "Color Tools",
      images: [
        {
          url: `https://singlecolorimage.com/get/${hexClean}/1200x630`,
          width: 1200,
          height: 630,
          alt: `Color ${hex} visualization`,
        },
      ],
    },
  };
}

export default async function ColorPage({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const resolvedParams = await params;
  const color = parseColor(resolvedParams.color);

  if (!color) redirect("/");

  const formats = getColorFormats(color);
  if (!formats) redirect("/");

  const colorHex = formats.hex;
  const shades = getShades(colorHex) || [];
  const tints = getTints(colorHex) || [];
  const complement = getComplement(colorHex);
  const triadic = getTriadic(colorHex) || [];
  const analogous = getAnalogous(colorHex) || [];
  const monochromatic = getMonochromatic(colorHex) || [];
  const splitComp = getSplitComplement(colorHex) || [];
  const tetradic = getTetradic(colorHex) || [];

  const hostUrl = await getHostUrl();
  const hexClean = formats.hex.replace("#", "");
  const colorName = color.toName();
  const baseUrl = `${hostUrl}/${colorName || hexClean}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${colorHex} Color Details`,
    description: `Detailed information about color ${colorHex}`,
    url: baseUrl,
    inLanguage: "en",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
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
    image: {
      "@type": "ImageObject",
      url: `https://singlecolorimage.com/get/${hexClean}/1200x630`,
      width: 1200,
      height: 630,
    },
  };

  function parseRgbString(rgbString: string) {
    const match = rgbString.match(/\d+/g);
    if (!match) return { r: 0, g: 0, b: 0 };
    const [r, g, b] = match.map(Number);
    return { r, g, b };
  }

  function parseCmykString(cmykString: string) {
    const match = cmykString.match(/\d+/g);
    if (!match) return { c: 0, m: 0, y: 0, k: 0 };
    const [c, m, y, k] = match.map(Number);
    return { c, m, y, k };
  }

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
        <h1 className="mb-4 text-center">
          <Link href="/" className="btn btn-link btn-lg text-decoration-none">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="me-2" />
          </Link>
          Color Details: {formats.hex}
        </h1>
        <ColorSearchForm />
        <h2>
          <span className="color-code">{formats.hex}</span> -{" "}
          <Link href={baseUrl} className="text-decoration-none">
            {colorName || "Unnamed Color"}
          </Link>
        </h2>
        <ColorCard hex={formats.hex} />
        <ColorFormats formats={formats} />
        <RgbChart rgb={parseRgbString(formats.rgb)} />
        <CmykChart cmyk={parseCmykString(formats.cmyk)} />
        <Ratio aspectRatio="16x9" style={{ maxWidth: 640 }} className="mx-auto">
          <iframe
            src={`https://www.youtube.com/embed/ULDRwd5dLLg?rel=0&modestbranding=1`}
            title="YouTube video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </Ratio>
        {/* Share buttons */}
        <div className="my-4 text-center">
          <p>Share this color:</p>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              baseUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-facebook btn-lg text-decoration-none mx-2"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              baseUrl
            )}&text="Look up this color ${formats.hex}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-x btn-lg text-decoration-none mx-2"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              baseUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-linkedin btn-lg text-decoration-none mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={`https://www.reddit.com/submit?url=${encodeURIComponent(
              baseUrl
            )}&title=${encodeURIComponent(
              "Look up this color" + " " + formats.hex
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-reddit btn-lg text-decoration-none mx-2"
          >
            <FontAwesomeIcon icon={faReddit} />
          </a>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
              baseUrl
            )}&media=${encodeURIComponent(
              `https://singlecolorimage.com/get/${hexClean}/1200x630`
            )}&description=${encodeURIComponent(
              "Look up this color" + " " + formats.hex
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pinterest btn-lg text-decoration-none mx-2"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>

        {/* Color palettes */}
        <ColorPalette type="shades" label="Shades" colors={shades} />
        <ColorPalette type="tints" label="Tints" colors={tints} />
        <ColorPalette
          type="analogous"
          label="Analogous Colors"
          colors={analogous}
        />
        <ColorPalette
          type="monochromatic"
          label="Monochromatic"
          colors={monochromatic}
        />
        {complement && (
          <ColorPalette
            type="complementary"
            label="Complementary Color"
            colors={[complement]}
          />
        )}
        <ColorPalette type="triadic" label="Triadic Colors" colors={triadic} />
        <ColorPalette
          type="splitComplement"
          label="Split Complementary"
          colors={splitComp}
        />
        <ColorPalette
          type="tetradic"
          label="Tetradic Colors"
          colors={tetradic}
        />
      </div>
    </>
  );
}
