"use client";

import { useTranslations } from "next-intl";
import { MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const t = useTranslations("Footer");
  const phoneNumber = "905370508712"; // Primary number
  const message = encodeURIComponent("Merhaba, nakliye hizmeti hakkında bilgi almak istiyorum.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const instagramUrl = "https://www.instagram.com/demirhannakliyat1?igsh=Ynd5OXloMGt0ZDNn";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-center">
      
      {/* Instagram Button */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/40 transition-shadow group relative"
      >
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          {t("instagram")}
        </div>
        <Instagram className="w-7 h-7" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-shadow group relative"
      >
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          {t("whatsapp")}
        </div>
        <MessageCircle className="w-7 h-7 fill-current" />
      </motion.a>

    </div>
  );
}
