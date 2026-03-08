"use client";

import { useState } from "react";
import { MapPin, Package, Phone, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface QuoteFormProps {
  cities: string[];
}

export function QuoteForm({ cities }: QuoteFormProps) {
  const tQuote = useTranslations("Quote");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    rooms: "1+1",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "905370508712"; // Primary contact number
    const emailAddress = "demirhannakliyat20@hotmail.com";

    const message = `*Yeni Teklif Talebi*\n\n` +
      `📍 *Nereden:* ${formData.from}\n` +
      `🏁 *Nereye:* ${formData.to}\n` +
      `📦 *Oda Sayısı:* ${formData.rooms}\n` +
      `📞 *Telefon:* ${formData.phone}\n\n` +
      `_Demirhan Nakliyat Web Sitesi üzerinden gönderildi._`;

    // 1. WhatsApp Redirect
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // 2. Email Client Open (mailto)
    const emailSubject = encodeURIComponent("Yeni Nakliye Teklif Talebi");
    const emailBody = encodeURIComponent(message.replace(/\*/g, "")); // Strip asterisks for email
    const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

    // Small delay for UI feel
    await new Promise(resolve => setTimeout(resolve, 800));

    // Choose primary method (WhatsApp is usually better for instant lead response)
    // We will open WhatsApp and also provide a simple fallback or secondary action if needed.
    window.open(whatsappUrl, '_blank');
    
    // Optionally also open email after a short delay or if WhatsApp fails
    // window.location.href = mailtoUrl;

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> {tQuote("from")}
        </label>
        <select 
          name="from"
          required 
          value={formData.from}
          onChange={handleChange}
          className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled>{tQuote("placeholder_city")}</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gold-500" /> {tQuote("to")}
        </label>
        <select 
          name="to"
          required 
          value={formData.to}
          onChange={handleChange}
          className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled>{tQuote("placeholder_city")}</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <Package className="w-4 h-4 text-muted-foreground" /> {tQuote("rooms")}
          </label>
          <select 
            name="rooms"
            required 
            value={formData.rooms}
            onChange={handleChange}
            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          >
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
          <input 
            name="phone"
            required
            type="tel" 
            value={formData.phone}
            onChange={handleChange}
            placeholder={tQuote("placeholder_phone")} 
            className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
          />
        </div>
      </div>

      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-md flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Yönlendiriliyor...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {tQuote("submit")}
          </>
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground mt-3">
        Teklifiniz anında WhatsApp üzerinden bize ulaşacaktır.
      </p>
    </form>
  );
}
