"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/services/home-moving.png",
    title: "Evden Eve Nakliyat",
    desc: "Güvenli ve Sigortalı Taşımacılık"
  },
  {
    image: "/images/services/office-moving.png",
    title: "Ofis ve Kurumsal",
    desc: "Hızlı ve Kesintisiz İş Transferi"
  },
  {
    image: "/images/services/international.png",
    title: "Uluslararası Lojistik",
    desc: "Dünyanın Her Yerine Güvenle"
  },
  {
    image: "/images/services/storage.png",
    title: "Akıllı Depolama",
    desc: "7/24 Güvenli ve Hijyenik Oda Sistemi"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-background group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay branding */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Brand Watermark */}
          <div className="absolute top-8 left-8 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-xl border border-white/10">
            DEMİRHAN NAKLİYAT
          </div>

          {/* Slide Content */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-bold font-outfit mb-1"
            >
              {slides[current].title}
            </motion.h3>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/80 text-sm md:text-base font-medium"
            >
              {slides[current].desc}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 right-8 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === i ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
