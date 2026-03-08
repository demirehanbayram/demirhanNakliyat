"use client";

import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";
import { ShieldCheck, PackageCheck, Zap } from "lucide-react";

export default function HomeMovingPage() {
  return (
    <ServiceDetailLayout
      title="Evden Eve Nakliyat"
      description="Evinizdeki her bir eşyayı kendi eşyamız gibi benimsiyor, noter onaylı güvence ve profesyonel ambalajlama ile yeni yuvanıza taşıyoruz."
      features={[
        {
          title: "Noter Onaylı Güvence",
          desc: "Türkiye'de bir ilk! Tüm taşıma süreci noter huzurunda hazırlanan resmi sözleşme ile yasal koruma altındadır.",
          icon: <ShieldCheck className="w-8 h-8" />
        },
        {
          title: "Profesyonel Paketleme",
          desc: "Eşyalarınızın türüne uygun, darbeye dayanıklı ve hijyenik ambalaj malzemeleri ile paketlenmesini sağlıyoruz.",
          icon: <PackageCheck className="w-8 h-8" />
        },
        {
          title: "Modern Asansör Sistemleri",
          desc: "Yüksek katlı binalarda eşyalarınızın zarar görmemesi için modüler asansör sistemlerimizi kullanıyoruz.",
          icon: <Zap className="w-8 h-8" />
        }
      ]}
      process={[
        { step: "01", title: "Ücretsiz Ekspertiz", desc: "Eşyalarınızı yerinde inceliyor ve en uygun planı hazırlıyoruz." },
        { step: "02", title: "Resmi Sözleşme", desc: "Noter onaylı sözleşme ile tüm haklarınızı koruma altına alıyoruz." },
        { step: "03", title: "Paketleme ve Taşıma", desc: "Uzman ekibimizle hızlı ve güvenli bir transfer gerçekleştiriyoruz." },
        { step: "04", title: "Montaj ve Teslimat", desc: "Yeni evinizde montaj işlemlerini tamamlayıp anahtar teslim ediyoruz." }
      ]}
    />
  );
}
