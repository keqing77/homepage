"use client";

import Link from "next/link";
import { Icons } from "@/components/shared/Icons";
import Navbar from "@/components/layout/Navbar";

import { ModeToggle } from "../shared/mode-toggle";
import LanguageSwitcher from "../shared/languageSwitcher";

export default function Header() {
  return (
    <header className="grid w-full grid-flow-col grid-cols-3 sm:grid-cols-4 items-center">
      <div className="flex items-center">
        <LanguageSwitcher />
      </div>

      <Navbar />

      <div className="flex items-center justify-end gap-4">
        <Link
          href="https://github.com/keqing77"
          target="_blank"
          className="opacity-80 hover:opacity-100"
        >
          <Icons.gitHub className="size-6" />
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
