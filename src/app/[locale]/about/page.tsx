import { useTranslations } from "next-intl";
import { Users, ShieldCheck, Clock, FileCheck, Coins, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("About");

  const features = [
    {
      title: t("features.f1_title"),
      desc: t("features.f1_desc"),
      icon: <Users className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10"
    },
    {
      title: t("features.f2_title"),
      desc: t("features.f2_desc"),
      icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
      bg: "bg-gold-500/10"
    },
    {
      title: t("features.f3_title"),
      desc: t("features.f3_desc"),
      icon: <Clock className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10"
    },
    {
      title: t("features.f4_title"),
      desc: t("features.f4_desc"),
      icon: <FileCheck className="w-8 h-8 text-gold-500" />,
      bg: "bg-gold-500/10"
    },
    {
      title: t("features.f5_title"),
      desc: t("features.f5_desc"),
      icon: <Coins className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10"
    },
    {
      title: t("features.f6_title"),
      desc: t("features.f6_desc"),
      icon: <HeartHandshake className="w-8 h-8 text-gold-500" />,
      bg: "bg-gold-500/10"
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      
      {/* 1. Header / Hero Section */}
      <section className="relative overflow-hidden bg-background pt-20 pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-gold-500/5 dark:bg-primary/5 -z-10" />
        <div className="container max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground font-outfit mb-6">
            {t("title")}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90 font-outfit mb-12 max-w-4xl mx-auto">
            {t("heading")}
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <p className="font-bold text-foreground text-xl md:text-2xl pt-6">
              {t("p4")}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Features Grid Section */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-foreground mb-4">
              {t("why_choose_us")}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className={`w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
