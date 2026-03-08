"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactPage() {
  const t = useTranslations("Contact");

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      label: t("phone_label"),
      value: "+90 850 123 45 67",
      bg: "bg-primary/10"
    },
    {
      icon: <Mail className="w-6 h-6 text-gold-500" />,
      label: t("email_label"),
      value: "info@demirhannakliyat.com",
      bg: "bg-gold-500/10"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: t("address_label"),
      value: t("address_val"),
      bg: "bg-primary/10"
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      
      {/* 1. Page Header */}
      <section className="relative overflow-hidden bg-background pt-16 pb-20 border-b border-border/40">
        <div className="absolute inset-0 bg-gold-500/5 dark:bg-primary/5 -z-10" />
        <div className="container max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-outfit mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Content Area */}
      <section className="py-20 flex-grow">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info (Cards) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-outfit text-foreground">{t("office_title")}</h2>
                <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="flex items-center gap-6 p-6 bg-card border border-border/50 rounded-2xl shadow-sm group hover:border-primary/30 transition-all"
                  >
                    <div className={`w-14 h-14 rounded-xl ${info.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-lg font-medium text-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQs Card */}
              <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 text-center lg:text-left">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-lg shadow-primary/20">
                  <HelpCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Başka sorunuz mu var?</h3>
                <p className="text-sm text-muted-foreground mb-4">Sıkça sorulan sorular sayfamızı ziyaret edebilir veya bize doğrudan ulaşabilirsiniz.</p>
                <Button variant="outline" className="rounded-full">S.S.S. İncele</Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border/50 rounded-[32px] p-8 md:p-12 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl font-bold font-outfit mb-8">{t("form_title")}</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t("form_name")}</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t("form_email")}</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t("form_phone")}</label>
                    <input 
                      type="tel" 
                      placeholder="+90 ___ ___ __ __"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t("form_message")}</label>
                    <textarea 
                      placeholder="..."
                      rows={5}
                      className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl text-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
                    {t("form_submit")}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
