"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "GraphQL",
  "PostgreSQL",
  "Docker",
  "AWS",
];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const hoverEffect = {
  scale: 1.02,
  y: -8,
  transition: {
    duration: 0.2,
  },
};

const projects = [
  {
    title: "blog1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequatur, repudiandae ratione consequuntur temporibus cum similique officia,",
    image: "/images/nextjs.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    link: "https://your-blog-url.com",
  },
  {
    title: "blog12",
    description:
      " vitae nemo aliquid, incidunt adipisci! Repellendus nemo harum repellat animi aspernatur asperiores blanditiis.",
    image: "/images/nextjs.png",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "https://your-ecommerce-url.com",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 gap-6"
          // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={hoverEffect}
              className="group"
            >
              <Card
                // className="flex overflow-hidden hover:shadow-lg transition-shadow duration-300"
                className="flex flex-col sm:flex-row w-full lg:w-4/5 items-stretch gap-6 rounded-2xl sm:shadow-[0_0px_1.2px_rgb(140,140,140)] shadow-[0_0px_2px_rgb(140,140,140)] hover:shadow-[0_0px_2px_rgb(140,140,140)] p-3 opacity-90 hover:opacity-100 bg-muted hover:bg-[#0A0C0C]"
              >
                {/* <div className="w-1/3 relative overflow-hidden"> */}
                <div className="relative aspect-[48/27] w-full sm:w-80 rounded-2xl shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                {/* <div className="w-2/3 p-6 space-y-4"> */}
                <div className="flex flex-col justify-between flex-grow p-4">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-sm text-gray-500">2024-11-13 | React</p>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
