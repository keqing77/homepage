"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { socialLinks } from "@/config/site";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");
  const [text] = useTypewriter({
    words: t.raw("words"),
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="max-w-4xl w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl mb-4">
            {t("intro")} <span className="font-semibold">{text}</span>
            <Cursor cursorStyle="|" />
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg">
            {t("hero")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 relative">
            <Image
              src="/images/avatar.png"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4 mt-4 "
      >
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 rounded-lg transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-lg bg-gray-400/0 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-400/10" />
            {link.icon({
              className:
                "size-6 relative z-10 transition-transform duration-300 group-hover:scale-110",
            })}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
