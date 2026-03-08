"use client";

import ServiceDetailLayout from "@/components/layout/ServiceDetailLayout";
import { Ship, FileCheck, Anchor } from "lucide-react";

export default function InternationalMovingPage() {
  return (
    <ServiceDetailLayout
      title="Uluslararası Nakliyat"
      description="Sınırları aşan lojistik ağımız ve uzman gümrükleme kadromuzla eşyalarınızı Türkiye'den dünyanın her yerine güvenle ulaştırıyoruz."
      features={[
        {
          title: "Uluslararası Sigorta",
          desc: "Kıtalar arası yolculuklarda eşyalarınızı tam kapsamlı uluslararası nakliyat sigortası ile koruyoruz.",
          icon: <Anchor className="w-8 h-8" />
        },
        {
          title: "Profesyonel Gümrükleme",
          desc: "Tüm gümrük süreçlerini sizin yerinize takip ederek bürokratik engelleri ortadan kaldırıyoruz.",
          icon: <FileCheck className="w-8 h-8" />
        },
        {
          title: "Multimodal Lojistik",
          desc: "Eşyalarınızı en uygun koşulda ulaştırmak için kara, hava ve deniz yollarını entegre ediyoruz.",
          icon: <Ship className="w-8 h-8" />
        }
      ]}
      process={[
        { step: "01", title: "Rota Belirleme", desc: "Varış ülkesine ait en hızlı ve güvenli güzergahı oluşturuyoruz." },
        { step: "02", title: "İhracat Paketleme", desc: "Uzun yolculuklar için ekstra korumalı özel ambalajlama yapıyoruz." },
        { step: "03", title: "Gümrük İşlemleri", desc: "Tüm yasal belgeleri hazırlayıp gümrük muayene süreçlerini yönetiyoruz." },
        { step: "04", title: "Yurtdışı Teslimat", desc: "Varış ülkesindeki partner yerel ekiplerimizle kapınıza teslim ediyoruz." }
      ]}
    />
  );
}
