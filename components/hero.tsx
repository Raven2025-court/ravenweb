"use client";

import { FancyButton } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  // Background image animation
  const bgImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Function to handle scrolling
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden  pt-0">
      {/* Background image */}
      {isClient && (
        <motion.div
          className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full z-0"
          variants={bgImageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/padel-court-background.png"
            alt="Padel court"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        </motion.div>
      )}

      {/* Content section */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-20 gap-6 max-w-[90vw] lg:max-w-[70vw] mx-auto">
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
                className="text-accent text-4xl sm:text-5xl md:text-7xl tracking-tighter font-semibold"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
              >
                with Raven Padel
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
              className="mt-4"
            >
              <FancyButton text="Get a Quote" onClick={scrollToContact} />
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
            <div className="mt-4">
              <FancyButton text="Get a Quote" onClick={scrollToContact} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
