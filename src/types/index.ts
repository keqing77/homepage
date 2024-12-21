import type { LucideProps } from "lucide-react";
import type { ReactElement } from "react";

export type SocialPlatform = 
  | "github" 
  | "twitter" 
  | "nextjs"

export type SocialLink = {
  name: SocialPlatform;
  label: string;
  link: string;
  icon: (props: LucideProps) => ReactElement;
};

export type NavItem = {
  name: string;
  path: string;
};
