"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/shared/Icons";
import Navbar from "@/components/layout/Navbar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { ModeToggle } from "../shared/mode-toggle";
export default function Header() {
  const pathname = usePathname();
  const page = pathname.split("/").slice(0, 2).join("/");

  return (
    <header className="grid w-full grid-flow-col grid-cols-3 sm:grid-cols-4 items-center">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="/images/avatar.png" />
          <AvatarFallback>KE</AvatarFallback>
        </Avatar>
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
