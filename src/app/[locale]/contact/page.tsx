import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Navigation");

  return (
    <div className="container mx-auto px-4 py-24 min-h-[50vh]">
      <h1 className="text-4xl font-bold font-outfit mb-6">{t("contact")}</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Bizimle hızlıca iletişime geçebilirsiniz. (Form ve harita entegrasyonu eklenecektir.)
      </p>
      
      <div className="bg-muted/30 p-8 rounded-2xl max-w-lg border border-border">
        <h3 className="font-semibold text-xl mb-4 text-foreground">Demirhan Nakliyat Merkez Ofisi</h3>
        <p className="text-muted-foreground mb-2">Telefon: +90 850 123 45 67</p>
        <p className="text-muted-foreground mb-2">E-posta: info@demirhannakliyat.com</p>
        <p className="text-muted-foreground mb-2">Adres: Kadıköy, İstanbul / Türkiye</p>
      </div>
    </div>
  );
}
