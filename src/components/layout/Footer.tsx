import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const tNav = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");

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
            {tFooter("desc")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">{tFooter("links_title")}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">{tNav("home")}</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">{tNav("services")}</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">{tNav("about")}</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">{tNav("contact")}</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">{tFooter("contact_title")}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{tFooter("tel")}</li>
            <li>{tFooter("email")}</li>
            <li>{tFooter("address")}</li>
          </ul>
        </div>

        {/* Notary Seal & Free Survey */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">{tFooter("trust_title")}</h3>
          <div className="p-4 border border-gold-500/30 rounded-lg bg-gold-500/5 hover:bg-gold-500/10 transition-colors flex flex-col gap-3">
            <p className="text-sm font-semibold text-gold-500 text-center leading-tight">
              {tFooter("notary_seal")}
            </p>
            <div className="h-px bg-gold-500/20 w-full" />
            <p className="text-sm font-bold text-gold-600 text-center uppercase tracking-wider">
              {tFooter("free_survey")}
            </p>
          </div>
        </div>

      </div>

      <div className="container max-w-7xl mx-auto px-4 lg:px-8 mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {tFooter("rights")}</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary">{tFooter("privacy")}</Link>
          <Link href="/terms" className="hover:text-primary">{tFooter("terms")}</Link>
        </div>
      </div>
    </footer>
  );
}
