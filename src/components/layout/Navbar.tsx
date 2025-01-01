"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  const navItems: NavItem[] = [
    { name: t("home"), path: "/" },
    { name: t("blog"), path: "/blog" },
    { name: t("project"), path: "/project" },
    { name: t("about"), path: "/about" },
  ];

  return (
    <div className="justify-center hidden col-span-2 mt-0.5 sm:flex h-14">
      <ul className="items-center justify-center hidden bg-[#f2f2f21a] rounded-full sm:flex px-2 py-1 ">
        {navItems.map((item) => {
          const isSelected = pathname === item.path;
          return (
            <motion.li key={item.name} className="relative">
              {isSelected && (
                <>
                  <motion.div
                    className="absolute left-1/4 w-1/2 mx-auto border-t-[3px] rounded-full shadow-[0_20px_100px_8px_#fff]"
                    layoutId="selected"
                  />
                  <motion.div
                    className="absolute top-0.5 bottom-0.5 w-full bg-[#f2f2f20d] rounded-full"
                    layoutId="selecteddiv"
                  />
                </>
              )}
              <Link href={`/${locale}${item.path}`}>
                <motion.div
                  whileHover={{
                    backgroundColor: "#f2f2f20d",
                  }}
                  className={`px-4 py-3 rounded-full ${
                    item.name !== "Home" &&
                    item.name !== "Blog" &&
                    item.name !== "About"
                      ? "tracking-tight"
                      : "tracking-widest"
                  } font-bold text-sm`}
                >
                  {item.name}
                </motion.div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
