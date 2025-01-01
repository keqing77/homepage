"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { useTranslations } from "next-intl";

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

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src={t("avatar")}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center md:text-left"
          >
            <h1 className="text-4xl font-bold mb-4">{t("name")}</h1>
            <p className="text-xl text-muted-foreground mb-4">{t("title")}</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="outline" size="icon">
                <GithubIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <TwitterIcon className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">{t("contact")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("aboutMe")}
            </p>
          </Card>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">{t("skillSet")}</h2>
          <motion.div className="flex flex-wrap gap-2">
            {t.raw("skills").map((skill: string, index: number) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">{t("workExperience")}</h2>
            <div className="space-y-6">
              {t.raw("experience").map((exp: any, index: number) => (
                <div key={index} className="border-l-2 border-primary/20 pl-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <span>{exp.title}</span>

                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
