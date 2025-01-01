import type { SocialLink } from "@/types";
import { Icons } from "@/components/shared/Icons";

export const socialLinks: SocialLink[] = [
  { 
    name: "github",
    label: "GitHub",
    link: "https://github.com/keqing77", 
    icon: Icons.gitHub
  },
  { 
    name: "twitter",
    label: "Twitter", 
    link: "https://x.com/", 
    icon: Icons.twitter 
  },
  { 
    name: "nextjs",
    label: "Portfolio", 
    link: "https://bento.me/keqing", 
    icon: Icons.nextjs 
  },
];
