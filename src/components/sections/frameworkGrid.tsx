"use client";

import { Icons } from "@/components/shared/Icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

const frameworks = [
  { name: "React", icon: Icons.bot, color: "rgb(97, 218, 251)" },
  { name: "Vue", icon: Icons.bot, color: "rgb(66, 184, 131)" },
  { name: "Svelte", icon: Icons.bot, color: "rgb(255, 62, 0)" },
  { name: "Next.js", icon: Icons.nextjs, color: "rgb(0, 0, 0)" },
];

export default function FrameworkGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto p-4">
      {frameworks.map((framework, index) => (
        <div
          key={framework.name}
          className={cn(
            "relative flex items-center justify-center",
            "w-20 h-20 rounded-xl bg-neutral-950",
            "transition-all duration-500 ease-out"
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            boxShadow:
              hoveredIndex === index ? `0 0 30px ${framework.color}40` : "none",
          }}
        >
          <framework.icon
            className={cn(
              "w-10 h-10 transition-all duration-300",
              hoveredIndex === index ? "scale-110" : "scale-100"
            )}
            style={{
              filter:
                hoveredIndex === index ? "brightness(1.2)" : "brightness(0.8)",
            }}
          />
          {hoveredIndex === index && (
            <div
              className="absolute inset-0 -z-10 rounded-xl opacity-20 blur-xl transition-opacity duration-500"
              style={{ backgroundColor: framework.color }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
