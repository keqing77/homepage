"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isChanging, setIsChanging] = useState(false);

  const switchLocale = async (newLocale: string) => {
    try {
      setIsChanging(true);
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      await router.push(newPath);
    } catch (error) {
      console.error("Failed to switch locale:", error);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale("en")}
        disabled={isChanging || locale === "en"}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          locale === "en"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        } ${isChanging ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("zh")}
        disabled={isChanging || locale === "zh"}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          locale === "zh"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        } ${isChanging ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        中文
      </button>
    </div>
  );
}
