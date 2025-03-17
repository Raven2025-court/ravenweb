"use client";

import {
  ArrowDownToLineIcon,
  BuildingIcon,
  CoinsIcon,
  RepeatIcon,
  WrenchIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export function WhatSetsUsApart() {
  const advantageItems = [
    {
      icon: <CoinsIcon size={24} className="text-primary" />,
      title: "Unparalleled Pricing",
      description:
        "We import high-quality court materials from South America that meet international standards, making padel more affordable and accessible to the U.S. market.",
    },
    {
      icon: <BuildingIcon size={24} className="text-primary" />,
      title: "Purchase Options",
      description:
        "Customizable packages tailored to your property. Choose a full court and installation package or just the court materials to fit your vision and budget.",
    },
    {
      icon: <ArrowDownToLineIcon size={24} className="text-primary" />,
      title: "Easily Transferable",
      description:
        "Unlike other sports structures, our padel courts can be moved and installed at a new property if you decide to relocate.",
    },
    {
      icon: <WrenchIcon size={24} className="text-primary" />,
      title: "Expert Engineers",
      description:
        "Our engineers have 5+ years of experience building over 250 padel courts, including courts for the A1 Padel Global Tournament in Chile 2024.",
    },
    {
      icon: <RepeatIcon size={24} className="text-primary" />,
      title: "Long-Term Relationship",
      description:
        "We help grow your business by connecting you with players, coaches, and organizing tournaments on your new courts.",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const iconAnimation = {
    rest: { rotate: 0 },
    hover: {
      rotate: 15,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  const visionBackgroundRef = useRef<HTMLDivElement>(null);

  return (
    <section id="difference" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            What Sets Us Apart
          </h2>
          <motion.div
            className="w-24 h-1 bg-secondary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            At Raven Padel, we deliver exceptional value through our unique
            approach to padel court construction and community building.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {advantageItems.map((item, index) => {
            let colSpan = "md:col-span-3";

            if (index === 1 || index === 2) colSpan = "md:col-span-2";
            if (index === 4) colSpan = "md:col-span-5";
            return (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-md border border-border hover:border-accent transition-all duration-300 ${colSpan}`}
                variants={fadeInScale}
                custom={index}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6"
                  initial="rest"
                  whileHover="hover"
                  variants={iconAnimation}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <motion.div
            className="bg-primary text-white rounded-lg p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 opacity-10"
              ref={visionBackgroundRef}
              animate={{
                rotate: [0, 180],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, repeatType: "reverse" },
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M45.3,-52.9C58.9,-42.2,70.3,-28.7,76.4,-12.2C82.5,4.4,83.4,23.8,75.1,38.5C66.8,53.2,49.4,63.1,31.6,69C13.9,74.8,-4.3,76.5,-22.1,72.2C-40,67.9,-57.6,57.5,-67.4,42.4C-77.3,27.3,-79.5,7.5,-76.6,-11.2C-73.8,-30,-65.9,-47.7,-52.6,-58.5C-39.3,-69.3,-19.6,-73.2,-2.2,-70.7C15.3,-68.2,31.7,-63.4,45.3,-52.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </motion.div>

            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our Vision
            </motion.h3>

            <motion.p
              className="text-white/80 mb-10 max-w-3xl relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Be part of padel&apos;s North American journey with Raven Padel.
              Our long-term vision is to establish a sustainable ecosystem for
              the sport that encourages lifelong engagement through these key
              pillars:
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Accessibility",
                  description:
                    "Making padel accessible to everyone regardless of age or skill level",
                },
                {
                  title: "Quality",
                  description:
                    "Building durable, high-quality padel courts that meet international standards",
                },
                {
                  title: "Affordability",
                  description:
                    "Creating a more affordable padel experience in the North American market",
                },
                {
                  title: "Growth",
                  description:
                    "Popularizing padel across North America through community and competition",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1 + 0.5,
                      },
                    },
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <h4 className="text-xl font-bold mb-2 text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
