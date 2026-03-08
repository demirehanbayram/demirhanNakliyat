import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Truck, Clock, CheckCircle2, MapPin, Package, Phone, Star } from "lucide-react";

export default function HomePage() {
  const tHero = useTranslations("Hero");
  const tTrust = useTranslations("Trust");
  const tServices = useTranslations("Services");
  const tQuote = useTranslations("Quote");
  const tTesti = useTranslations("Testimonials");

  const services = [
    tServices("home"),
    tServices("office"),
    tServices("international"),
    tServices("storage")
  ];

  const testimonials = [
    { name: "Ahmet Y.", comment: "Noter onaylı olması bana büyük güven verdi. Eşyalarım çok hızlı taşındı.", rating: 5 },
    { name: "Ayşe K.", comment: "Tam söyledikleri saatte geldiler, paketleme çok profesyoneldi.", rating: 5 },
    { name: "Mehmet D.", comment: "Ofis taşımacılığında Demirhan Nakliyat tek tercihim. Mükemmel hizmet.", rating: 5 },
    { name: "Fatma S.", comment: "Çok kibar ve işini iyi yapan bir ekip. Evden eve nakliyatta en iyisi.", rating: 5 },
    { name: "Caner T.", comment: "Sigortalı taşımacılık sözünü gerçekten tutuyorlar. Gönül rahatlığıyla tercih edebilirsiniz.", rating: 5 },
    { name: "Zeynep B.", comment: "Almanya'ya taşınırken uluslararası lojistik süreçlerini sorunsuz yönettiler.", rating: 5 },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
        <div className="absolute inset-0 bg-gold-500/5 dark:bg-primary/10 -z-10" />
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground font-outfit max-w-4xl mx-auto leading-tight">
            {tHero("title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {tHero("subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all w-full sm:w-auto">
              {tHero("cta")}
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-border hover:bg-muted w-full sm:w-auto">
                {tHero("services_btn")}
              </Button>
            </Link>
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
              <h3 className="text-xl font-semibold mb-3">{tTrust("notary_title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tTrust("notary_desc")}</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{tTrust("fleet_title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tTrust("fleet_desc")}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{tTrust("time_title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tTrust("time_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Short Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-foreground mb-4">{tServices("title")}</h2>
            <p className="text-muted-foreground">{tServices("subtitle")}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group flex items-start gap-4 p-5 rounded-xl border border-border/60 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer bg-card">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{service}</h4>
                  <Link href="/services" className="text-sm text-muted-foreground mt-2 inline-block hover:underline">{tServices("details")} &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Marquee) Section */}
      <section className="py-20 bg-muted/20 border-t border-border/40 overflow-hidden relative">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 mb-12 text-center">
            <h2 className="text-3xl font-bold font-outfit text-foreground mb-4">{tTesti("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{tTesti("subtitle")}</p>
        </div>
        
        {/* CSS Marquee implementation */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee shrink-0 pr-6">
            {testimonials.map((testi, i) => (
              <div key={i} className="w-[350px] bg-card border border-border/50 rounded-2xl p-6 shadow-sm shrink-0">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testi.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">&quot;{testi.comment}&quot;</p>
                <div className="font-semibold text-foreground text-sm">{testi.name}</div>
              </div>
            ))}
          </div>
          {/* Duplicate set for infinite scroll effect */}
          <div className="flex gap-6 animate-marquee shrink-0 pr-6">
            {testimonials.map((testi, i) => (
              <div key={`dup-${i}`} className="w-[350px] bg-card border border-border/50 rounded-2xl p-6 shadow-sm shrink-0">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testi.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">&quot;{testi.comment}&quot;</p>
                <div className="font-semibold text-foreground text-sm">{testi.name}</div>
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
                <h2 className="text-3xl font-bold font-outfit mb-4 text-foreground">{tQuote("title")}</h2>
                <p className="text-muted-foreground mb-8">{tQuote("subtitle")}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" /> {tQuote("feature_1")}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" /> {tQuote("feature_2")}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold-500" /> {tQuote("feature_3")}
                  </div>
                </div>
              </div>

              {/* Minimal Demo Form Input structure */}
              <div className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> {tQuote("from")}
                  </label>
                  <input type="text" placeholder={tQuote("placeholder_city")} className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-500" /> {tQuote("to")}
                  </label>
                  <input type="text" placeholder={tQuote("placeholder_city")} className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Package className="w-4 h-4 text-muted-foreground" /> {tQuote("rooms")}
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
                      <Phone className="w-4 h-4 text-muted-foreground" /> {tQuote("phone")}
                    </label>
                    <input type="tel" placeholder={tQuote("placeholder_phone")} className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                </div>

                <Button className="w-full h-12 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-md">
                  {tQuote("submit")}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  {tQuote("privacy_note")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
