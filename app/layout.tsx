import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MainBrandLogo from "@/components/MainBrandLogo";
import ColorLogo from "@/components/ColorLogo";
import Script from "next/script";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3585118770961536`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="d-flex justify-content-start gap-0">
          <MainBrandLogo
            logoSrc="/soft-logo.webp"
            mainDomain="soft.io.vn"
            dismissible={false}
            altText="Logo Soft"
          />
          <ColorLogo
            logoSrc="/color-logo.webp"
            mainDomain="color.soft.io.vn"
            dismissible={false}
            altText="Logo Color"
          />
        </div>
        {children}
        <Footer />
        <GoogleAnalytics ga_id="G-HHXZSNQ65X" />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t9evh6woav");
          `}
        </Script>
      </body>
    </html>
  );
}
