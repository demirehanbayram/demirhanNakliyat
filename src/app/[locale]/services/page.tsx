import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Navigation");

  return (
    <div className="container mx-auto px-4 py-24 min-h-[50vh]">
      <h1 className="text-4xl font-bold font-outfit mb-6">{t("services")}</h1>
      <p className="text-muted-foreground text-lg">
        Tüm Türkiye&apos;ye noter onaylı sigortalı taşımacılık hizmeti veriyoruz. (Bu sayfa yapım aşamasındadır.)
      </p>
    </div>
  );
}
