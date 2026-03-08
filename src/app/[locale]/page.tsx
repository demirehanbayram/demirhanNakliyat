import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ShieldCheck, Truck, Clock, CheckCircle2, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { HeroSlider } from "@/components/layout/HeroSlider";

export default function HomePage() {
  const tHero = useTranslations("Hero");
  const tTrust = useTranslations("Trust");
  const tServices = useTranslations("Services");
  const tQuote = useTranslations("Quote");
  const tTesti = useTranslations("Testimonials");

  interface Testimonial {
    name: string;
    comment: string;
    rating: number;
  }

  const services = [
    { name: tServices("home"), href: "/services/home-moving", image: "/images/services/home-moving.png" },
    { name: tServices("office"), href: "/services/office-moving", image: "/images/services/office-moving.png" },
    { name: tServices("international"), href: "/services/international", image: "/images/services/international.png" },
    { name: tServices("storage"), href: "/services/storage", image: "/images/services/storage.png" }
  ];


  const cities = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Şırnak", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
        <div className="absolute inset-0 bg-gold-500/5 dark:bg-primary/10 -z-10" />
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground font-outfit leading-tight">
                {tHero("title")}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {tHero("subtitle")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="#quote" className="w-full sm:w-auto">
                  <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all w-full sm:w-auto">
                    {tHero("cta")}
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-border hover:bg-muted w-full sm:w-auto">
                    {tHero("services_btn")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/9] lg:aspect-square">
              <HeroSlider />
            </div>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className="group">
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/50 hover:shadow-xl transition-all h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{service.name}</h4>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{tServices("details")}</span>
                  </div>
                </div>
              </Link>
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
            {(tTesti.raw("list") as Testimonial[]).map((testi, i) => (
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
            {(tTesti.raw("list") as Testimonial[]).map((testi, i) => (
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
      <section id="quote" className="py-20 bg-primary/5 border-t border-border/40 relative">
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

              {/* Render QuoteForm Client Component */}
              <QuoteForm cities={cities} />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
