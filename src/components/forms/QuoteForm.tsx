"use client";

import { useState } from "react";
import { MapPin, Package, Phone, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface QuoteFormProps {
  cities: string[];
}

export function QuoteForm({ cities }: QuoteFormProps) {
  const tQuote = useTranslations("Quote");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-background rounded-2xl p-8 border border-primary/20 shadow-xl text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Teklif Talebiniz Alındı!</h3>
        <p className="text-muted-foreground text-sm">
          Müşteri temsilcilerimiz en kısa sürede (ortalama 15 dakika içinde) belirttiğiniz telefon numarasından size ulaşacaktır.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
          className="rounded-xl"
        >
          Yeni Teklif Al
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" /> {tQuote("from")}
        </label>
        <select required className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer">
          <option value="" disabled selected>{tQuote("placeholder_city")}</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gold-500" /> {tQuote("to")}
        </label>
        <select required className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer">
          <option value="" disabled selected>{tQuote("placeholder_city")}</option>
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
          <select required className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
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
            required
            type="tel" 
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
            Gönderiliyor...
          </>
        ) : (
          tQuote("submit")
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground mt-3">
        {tQuote("privacy_note")}
      </p>
    </form>
  );
}
