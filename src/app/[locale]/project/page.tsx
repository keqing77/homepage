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
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "project1",
    description: "develop base on Next.js",
    image: "/images/nextjs.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    link: "https://your-blog-url.com",
  },
  {
    title: "project2",
    description: "Full stack e-commerce solution",
    image: "/images/nextjs.png",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    link: "https://your-ecommerce-url.com",
  },
  // ... 可以添加更多项目
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
        <h1 className="text-4xl font-bold text-center mb-12">我的项目</h1>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    Check it out
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
