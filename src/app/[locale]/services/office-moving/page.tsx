"use client";

import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";
import { ShieldCheck, Building2, Server, Globe2, Briefcase, Clock } from "lucide-react";

export default function OfficeMovingPage() {
  return (
    <ServiceDetailLayout
      title="Ofis ve Kurumsal Taşıma"
      description="İş akışınızın kesintisiz devam etmesi için ofis mobilyalarınızı, IT altyapınızı ve önemli dökümanlarınızı kurumsal standartlarımızla taşıyoruz."
      features={[
        {
          title: "Hızlı Yerleşim Garantisi",
          desc: "Hafta sonu veya mesai dışı operasyonlarımızla iş kaybınızı minimuma indirerek hızlı bir geçiş sağlıyoruz.",
          icon: <Clock className="w-8 h-8" />
        },
        {
          title: "IT ve Arşiv Güvenliği",
          desc: "Sunucu ve diğer elektronik cihazlarınız için antistatik ambalajlar ve özel korumalı sandıklar kullanıyoruz.",
          icon: <Server className="w-8 h-8" />
        },
        {
          title: "Proje Bazlı Yönetim",
          desc: "Her ofis taşıma operasyonu için bir proje yöneticisi atayarak sürecin kusursuz işlemesini garanti ediyoruz.",
          icon: <Briefcase className="w-8 h-8" />
        }
      ]}
      process={[
        { step: "01", title: "Envanter ve Planlama", desc: "Tüm kurumsal varlıkların listesini çıkarıp lojistik planı yapıyoruz." },
        { step: "02", title: "Özel Paketleme", desc: "Ofis gereçlerini kategorize ederek barkodlu sistemlerle paketliyoruz." },
        { step: "03", title: "Sertifikalı Transfer", desc: "Ağır ve hassas tüm ofis yüklerinizi modern araçlarımızla transfer ediyoruz." },
        { step: "04", title: "Ofis Kurulumu", desc: "Yeni ofisinizde yerleşim planına göre montaj ve düzenlemeyi bitiriyoruz." }
      ]}
    />
  );
}
