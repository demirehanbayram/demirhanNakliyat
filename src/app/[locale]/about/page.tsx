import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("Navigation");

  return (
    <div className="container mx-auto px-4 py-24 min-h-[50vh]">
      <h1 className="text-4xl font-bold font-outfit mb-6">{t("about")}</h1>
      <p className="text-muted-foreground text-lg">
        Demirhan Nakliyat olarak yılların tecrübesiyle müşterilerimize güven taşıyoruz. (Bu sayfa yapım aşamasındadır.)
      </p>
    </div>
  );
}
