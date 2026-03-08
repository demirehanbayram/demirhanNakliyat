import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Truck, Clock, CheckCircle2, MapPin, Package, Phone } from "lucide-react";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
        <div className="absolute inset-0 bg-gold-500/5 dark:bg-primary/10 -z-10" />
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground font-outfit max-w-4xl mx-auto leading-tight">
            {t("Hero.title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("Hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all w-full sm:w-auto">
              {t("Hero.cta")}
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-border hover:bg-muted w-full sm:w-auto">
              Hizmetleri İncele
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Trust & Notary Section */}
      <section className="py-20 bg-muted/30 border-y border-border/40">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Noter Onaylı Sözleşme</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Türkiye&apos;de tek noter tasdikli taşıma belgesi ile tüm haklarınız yasal güvence altındadır.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Geniş Araç Filosu</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Her ebatta eşya ve yüke uygun, modern liftli ve çelik kasalı araçlarımızla hizmetinizdeyiz.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tam Zamanında</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Size söz verdiğimiz gün ve saatte kapınızdayız. Gecikme olmadan profesyonel transfer süreci.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Short Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-foreground mb-4">Profesyonel Nakliyat Çözümleri</h2>
            <p className="text-muted-foreground">Demirhan kalitesiyle ihtiyacınız olan tüm taşımacılık hizmetlerini eksiksiz karşılıyoruz.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Evden Eve Nakliyat', 'Ofis Taşıma', 'Uluslararası Lojistik', 'Depolama Hizmetleri'].map((service, i) => (
              <div key={i} className="group flex items-start gap-4 p-5 rounded-xl border border-border/60 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer bg-card">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{service}</h4>
                  <Link href="/services" className="text-sm text-muted-foreground mt-2 inline-block hover:underline">Detaylar &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quick Quote CTA Form Container */}
      <section className="py-20 bg-primary/5 border-t border-border/40 relative">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border/50 shadow-xl overflow-hidden relative z-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-outfit mb-4 text-foreground">Hızlı Fiyat Teklifi Alın</h2>
                <p className="text-muted-foreground mb-8">Eşyalarınızın nereden nereye taşınacağını belirtin, size en uygun fiyat ve zaman planını anında sunalım.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" /> Ücretsiz Ekspertiz
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" /> Sigortalı Taşıma Garantisi
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" /> Profesyonel Paketleme
                  </div>
                </div>
              </div>

              {/* Minimal Demo Form Input structure */}
              <div className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Nereden
                  </label>
                  <input type="text" placeholder="İl, İlçe seçin" className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-500" /> Nereye
                  </label>
                  <input type="text" placeholder="İl, İlçe seçin" className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Package className="w-4 h-4 text-muted-foreground" /> Oda Sayısı
                    </label>
                    <select className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                      <option>1+1</option>
                      <option>2+1</option>
                      <option>3+1</option>
                      <option>4+1 ve üzeri</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" /> Telefon
                    </label>
                    <input type="tel" placeholder="0(555) ___ __ __" className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                </div>

                <Button className="w-full h-12 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-md">
                  Teklif İste
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Göndererek KVKK ve Gizlilik politikasını kabul etmiş sayılırsınız.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
