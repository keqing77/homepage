"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isChanging, setIsChanging] = useState(false);

  const switchLocale = async () => {
    try {
      setIsChanging(true);
      const newLocale = locale === "en" ? "zh" : "en";
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      await router.push(newPath);
    } catch (error) {
      console.error("Failed to switch locale:", error);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <button
      onClick={switchLocale}
      disabled={isChanging}
      className={`rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition-colors ${
        isChanging ? "opacity-50 cursor-not-allowed" : ""
      }`}
      title={locale === "en" ? "切换到中文" : "Switch to English"}
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">
        {locale === "en" ? "切换到中文" : "Switch to English"}
      </span>
    </button>
  );
}
