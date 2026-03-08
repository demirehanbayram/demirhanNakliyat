import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";

export function Header() {
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl mx-auto items-center justify-between px-4 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-outfit text-xl font-bold tracking-tighter text-primary uppercase">
              Demirhan <span className="text-gold-500">Nakliyat</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            {t("home")}
          </Link>
          <Link href="/services" className="hover:text-primary transition-colors">
            {t("services")}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t("about")}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t("contact")}
          </Link>
        </nav>

        {/* Right Actions Segment */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/#quote">
            <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              {t("quote")}
            </Button>
          </Link>
        </div>
        
      </div>
    </header>
  );
}
