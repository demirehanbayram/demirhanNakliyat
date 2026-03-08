"use client";

import { useTranslations } from "next-intl";
import { Home, Building2, Globe2, Warehouse, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("home"),
      desc: t("home_desc"),
      icon: <Home className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10",
      link: "/services/home-moving"
    },
    {
      title: t("office"),
      desc: t("office_desc"),
      icon: <Building2 className="w-8 h-8 text-gold-500" />,
      bg: "bg-gold-500/10",
      link: "/services/office-moving"
    },
    {
      title: t("international"),
      desc: t("inter_desc"),
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10",
      link: "/services/international"
    },
    {
      title: t("storage"),
      desc: t("storage_desc"),
      icon: <Warehouse className="w-8 h-8 text-gold-500" />,
      bg: "bg-gold-500/10",
      link: "/services/storage"
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      
      {/* 1. Header Section */}
      <section className="relative overflow-hidden bg-background pt-20 pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-gold-500/5 dark:bg-primary/5 -z-10" />
        <div className="container max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            Noter Onaylı Güvence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-outfit mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-muted/20 flex-grow">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="group relative bg-card border border-border/50 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-foreground font-outfit">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all underline-offset-4 hover:underline"
                    >
                      {t("details")} <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
