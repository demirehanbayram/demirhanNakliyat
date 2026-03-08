import Script from "next/script";

declare global {
  interface Window {
    gtag: (type: string, action: string, data?: Record<string, unknown>) => void;
  }
}

export default function Analytics() {
  const GA_ID = "G-XXXXXXXXXX"; // BURAYA GOOGLE ANALYTICS ID GELMELİ
  const GADS_ID = "AW-XXXXXXXXXX"; // BURAYA GOOGLE ADS ID GELMELİ

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', '${GADS_ID}');
          `,
        }}
      />
    </>
  );
}

/**
 * Teklif butonu dönüşüm takibi (Conversion Tracking) için bu fonksiyonu kullanabilirsiniz.
 */
export const trackConversion = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: "AW-XXXXXXXXXX/YYYYYYYYYYYY", // BURAYA GOOGLE ADS CONVERSION LABEL GELMELİ
      event_callback: () => {
        window.open(url, '_blank');
      },
    });
  } else {
    window.open(url, '_blank');
  }
};
