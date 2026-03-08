import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Olası diller (TR, EN, DE, AR)
  locales: ['tr', 'en', 'de', 'ar'],
 
  // Varsayılan dil (tr)
  defaultLocale: 'tr',
  
  // URL formatı (örn: /tr/about veya sadece /about)
  localePrefix: 'as-needed' 
});

export type Locale = (typeof routing.locales)[number];

// Yönlendirme ve navigasyon için hook'ları oluşturuyoruz
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
