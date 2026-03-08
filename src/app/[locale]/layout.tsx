import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import Analytics from '@/components/Analytics';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Demirhan Nakliyat - Türkiye'nin Tek Noter Onaylı Nakliye Firması",
    template: "%s | Demirhan Nakliyat"
  },
  description: "Demirhan Nakliyat ile Türkiye çapında sigortalı, güvenli ve noter onaylı evden eve nakliyat, ofis taşıma ve depolama hizmetleri. Hemen ücretsiz teklif alın!",
  keywords: ["nakliyat", "evden eve nakliyat", "noter onaylı nakliyat", "şehirler arası nakliyat", "ofis taşıma", "eşya depolama", "demirhan nakliyat"],
  authors: [{ name: "Demirhan Nakliyat" }],
  creator: "Demirhan Nakliyat",
  publisher: "Demirhan Nakliyat",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://demirhannakliyat.com.tr',
    siteName: 'Demirhan Nakliyat',
    title: "Demirhan Nakliyat - Güvenli ve Noter Onaylı Taşımacılık",
    description: "Türkiye'nin ilk ve tek noter onaylı nakliye firması. Sigortalı taşımacılıkta lider marka.",
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Demirhan Nakliyat Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Arabic needs RTL direction
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Demirhan Nakliyat",
    "alternateName": "Demirhan Evden Eve Nakliye",
    "url": "https://demirhannakliyat.com.tr",
    "logo": "https://demirhannakliyat.com.tr/images/og-image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-537-050-87-12",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": ["Turkish", "English", "German", "Arabic"]
    },
    "sameAs": [
      "https://www.instagram.com/demirhannakliyat",
      "https://wa.me/905370508712"
    ],
    "description": "Türkiye'nin ilk ve tek noter onaylı nakliyat firması. Sigortalı, güvenli evden eve nakliyat.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denizli",
      "addressCountry": "TR"
    }
  };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Analytics />
              <Header />
              <main className="flex-1">{children}</main>
              <WhatsAppButton />
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
