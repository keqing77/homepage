"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { use } from "react";

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

export default function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations("BlogPage");
  const router = useRouter();
  const { locale } = use(params);

  const blogs = Array.from({ length: 2 }, (_, i) => ({
    title: t(`blogs.${i}.title`),
    time: t(`blogs.${i}.time`),
    description: t(`blogs.${i}.concise`),
    image: t(`blogs.${i}.image`),
    tags: t(`blogs.${i}.tags`).split(","),
    slug: `blog-${i + 1}`,
  }));

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-center mb-12">{t("title")}</h1>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 gap-6"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              variants={fadeInUp}
              whileHover={hoverEffect}
              className="group"
            >
              <Card
                className="flex flex-col sm:flex-row w-full lg:w-4/5 items-stretch gap-6 rounded-2xl sm:shadow-[0_0px_1.2px_rgb(140,140,140)] shadow-[0_0px_2px_rgb(140,140,140)] hover:shadow-[0_0px_2px_rgb(140,140,140)] p-3 opacity-90 hover:opacity-100 bg-[#fafafa] dark:bg-[#1a1a1a] hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] cursor-pointer transition-colors"
                onClick={() => router.push(`/${locale}/blog/${blog.slug}`)}
              >
                <div className="relative aspect-[48/27] w-full sm:w-80 rounded-2xl shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow p-4 gap-2 max-h-48 overflow-y-auto">
                  <h2 className="text-2xl font-bold">{blog.title}</h2>
                  <p className="text-sm text-gray-500">{blog.time}</p>
                  <p className="text-muted-foreground">{blog.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
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
