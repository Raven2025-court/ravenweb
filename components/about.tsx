"use client";

import { GlobeIcon, InfoIcon, TargetIcon, UsersIcon } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    name: "What is Padel?",
    description:
      "A dynamic racket sport blending elements of tennis and squash, played on an enclosed court roughly one-third the size of a tennis court.",
    icon: InfoIcon,
  },
  {
    name: "Global Impact",
    description:
      "Played in over 90 countries with more than 25 million players worldwide, with Olympic debut anticipated by 2032.",
    icon: GlobeIcon,
  },
  {
    name: "Our Team",
    description:
      "Led by experienced co-founders with deep roots in racket sports and professional padel competition.",
    icon: UsersIcon,
  },
  {
    name: "Our Mission",
    description:
      "To make padel accessible, affordable, and popular throughout North America by building high-quality courts and fostering community.",
    icon: TargetIcon,
  },
];

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "6rem",
    transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
  },
};

const storyVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 * i,
      ease: "easeOut",
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2,
    },
  },
  hover: {
    rotate: 360,
    scale: 1.2,
    transition: { duration: 0.6 },
  },
};

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={titleVariants}
          >
            About Raven Padel
          </motion.h2>

          <motion.div
            className="h-1 bg-secondary mx-auto mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={lineVariants}
          ></motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            Bringing the exciting world of padel to North America with passion,
            expertise, and vision.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={storyVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-4 text-sm md:text-lg">
              Founded by lifelong racket sports enthusiasts Matias Le-Fort
              Solari and Camilo Ponce, Raven Padel Growth and Development
              emerged from a passion for the sport and a vision to transform the
              North American recreational landscape.
            </p>
            <p className="text-muted-foreground mb-4 text-sm md:text-lg">
              With extensive international experience in padel across South
              America, our founders recognized the untapped potential in the
              U.S. market for this exciting, social, and accessible sport.
            </p>
            <p className="text-muted-foreground text-sm md:text-lg">
              As competitive padel players themselves, they bring firsthand
              insight into what makes an exceptional padel experience, from
              court design to community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
            {items.map((item, i) => (
              <motion.div
                className="border border-border p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                custom={i}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary flex gap-2 items-center">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    variants={iconVariants}
                  >
                    <item.icon className="text-secondary size-5" />
                  </motion.div>
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
