"use client";

import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";
import { Thermometer, Video, Key } from "lucide-react";

export default function StoragePage() {
  return (
    <ServiceDetailLayout
      title="Akıllı ve Güvenli Depolama"
      description="Eşyalarınız için nem, ısı ve güvenlik kontrolü sağlanan modern depolarımızda kişiye özel oda çözümleri sunuyoruz."
      imageSrc="/images/services/storage.png"
      features={[
        {
          title: "7/24 Kesintisiz Güvenlik",
          desc: "Depolarımız yüksek çözünürlüklü kameralar ve profesyonel güvenlik ekipleriyle sürekli izlenmektedir.",
          icon: <Video className="w-8 h-8" />
        },
        {
          title: "İklimlendirme Kontrolü",
          desc: "Nem ve sıcaklık takibiyle eşyalarınızın deforme olmasını veya koku yapmasını engelliyoruz.",
          icon: <Thermometer className="w-8 h-8" />
        },
        {
          title: "Kişiye Özel Odalar",
          desc: "Eşyalarınız diğerleriyle karışmaz; size özel kilitli, hijyenik ve modern bölmelerde muhafaza edilir.",
          icon: <Key className="w-8 h-8" />
        }
      ]}
      process={[
        { step: "01", title: "Envanter Kaydı", desc: "Depoya girecek tüm eşyaların detaylı listesini çıkarıp etiketliyoruz." },
        { step: "02", title: "İlaçlama ve Temizlik", desc: "Anti-alerjenik ve hijyenik koşullar için periyodik ilaçlama yapıyoruz." },
        { step: "03", title: "Depolama Protokolü", desc: "Noter onaylı depolama sözleşmesi ile süre ve şartları bağlıyoruz." },
        { step: "04", title: "İstediğinizde Teslim", desc: "Dilediğiniz an eşyalarınızı aynı özenle adresinize geri getiriyoruz." }
      ]}
    />
  );
}
