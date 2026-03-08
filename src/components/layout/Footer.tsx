import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("Navigation");

  return (
    <footer className="w-full bg-background border-t border-border/40 pb-8 pt-16 mt-auto">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Information */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <span className="font-outfit text-xl font-bold tracking-tight text-primary">
              Demirhan<span className="text-gold-500">Nakliyat</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Türkiye&apos;nin ilk ve tek noter onaylı nakliyat firması. Eşyalarınız bizimle güvende.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">{t("home")}</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">{t("services")}</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">{t("about")}</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">İletişim</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Tel: +90 850 123 45 67</li>
            <li>Email: info@demirhannakliyat.com</li>
            <li>Merkez: İstanbul, Türkiye</li>
          </ul>
        </div>

        {/* Notary Seal */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Güvence</h3>
          <div className="p-4 border border-gold-500/30 rounded-lg bg-gold-500/5 hover:bg-gold-500/10 transition-colors">
            <p className="text-sm font-medium text-gold-500 text-center">
              %100 Noter Onaylı<br/>Taşımacılık Belgesi
            </p>
          </div>
        </div>

      </div>

      <div className="container max-w-7xl mx-auto px-4 lg:px-8 mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Demirhan Nakliyat. Tüm hakları saklıdır.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary">Gizlilik Politikası</Link>
          <Link href="/terms" className="hover:text-primary">Kullanım Şartları</Link>
        </div>
      </div>
    </footer>
  );
}
