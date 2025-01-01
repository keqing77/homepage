"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
// import { getTranslations } from "next-intl/server";

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

export default function AboutPage() {
  // export default async function AboutPage() {
  // const t = await getTranslations("AboutPage");
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
                src="/images/avatar.png"
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
            <h1 className="text-4xl font-bold mb-4">Keqing</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Full stack developer
            </p>
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
            <h2 className="text-2xl font-bold mb-4">About me</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              consequatur, repudiandae ratione consequuntur temporibus cum
              similique officia, vitae nemo aliquid, incidunt adipisci!
              Repellendus nemo harum repellat animi aspernatur asperiores
              blanditiis.
            </p>
          </Card>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Skills</h2>
          <motion.div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
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
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/20 pl-4">
                <h3 className="font-semibold">Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground">2024 - now</p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima consequatur, repudiandae ratione consequuntur
                  temporibus cum similique officia, vitae nemo aliquid, incidunt
                  adipisci! Repellendus nemo harum repellat animi aspernatur
                  asperiores blanditiis.
                </p>
              </div>
              <div className="border-l-2 border-primary/20 pl-4">
                <h3 className="font-semibold">Software Engineer</h3>
                <p className="text-sm text-muted-foreground">2022 - 2024</p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima consequatur, repudiandae ratione consequuntur
                  temporibus cum similique officia, vitae nemo aliquid, incidunt
                  adipisci! Repellendus nemo harum repellat animi aspernatur
                  asperiores blanditiis.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
