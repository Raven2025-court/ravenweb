"use client";

import { CourtCanvas } from "./animations/court-canvas";
import { FancyButton } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [isClient, setIsClient] = useState(false);

  // This useEffect ensures animations only run client-side to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Text animation for main title
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const titleWord = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  // Split main title into words for individual animation
  const titleWords = "Bring the Fastest Growing Sport to Your Property".split(
    " "
  );

  // Subtitle fade up animation
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Description text animation
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 1.0,
        ease: "easeOut",
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 1.3,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Canvas fade-in animation
  const canvasVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.6,
        ease: "easeOut",
      },
    },
  };

  // Function to handle smooth scrolling
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-[50px] sm:py-12 md:py-24 overflow-clip">
      <div className="flex flex-col items-center px-4 gap-4 max-w-[90vw] md:max-w-[70vw] mx-auto">
        {isClient ? (
          <>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-center text-primary"
              variants={titleContainer}
              initial="hidden"
              animate="visible"
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  variants={titleWord}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="text-secondary/85 text-4xl sm:text-5xl md:text-7xl tracking-tighter font-semibold"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
              >
                Padel by Raven
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-center text-muted-foreground max-w-4xl"
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
            >
              High-quality padel court installation with expert guidance and
              unbeatable pricing.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <FancyButton text="Get a Quote" onClick={scrollToContact} />
            </motion.div>

            <motion.div
              className="w-full"
              variants={canvasVariants}
              initial="hidden"
              animate="visible"
            >
              <CourtCanvas />
            </motion.div>
          </>
        ) : (
          <>
            {/* Static version for server rendering to prevent hydration issues */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-center text-primary">
              Bring the Fastest Growing Sport to Your Property <br />
              <span className="text-secondary/85 text-4xl sm:text-5xl md:text-7xl tracking-tighter font-semibold">
                Padel by Raven
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-center text-muted-foreground max-w-4xl">
              High-quality padel court installation with expert guidance and
              unbeatable pricing.
            </p>
            <FancyButton text="Get a Quote" onClick={scrollToContact} />
            <CourtCanvas />
          </>
        )}
      </div>
    </section>
  );
}
