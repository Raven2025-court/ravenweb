"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { Activity, Users, TrendingUp, UserPlus } from "lucide-react";

interface OpportunityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatisticItem {
  value: string;
  label: string;
}

export function MarketOpportunity() {
  const controls = useAnimation();
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  // Opportunity Cards
  const opportunityCards: OpportunityCard[] = [
    {
      icon: <Activity size={28} className="text-primary" />,
      title: "Rising Health & Fitness Trends",
      description:
        "The U.S. has seen a significant increase in health consciousness, with more people seeking new, exciting ways to stay active. Padel offers a full-body workout appealing to fitness enthusiasts, families, and older adults alike.",
    },
    {
      icon: <Users size={28} className="text-primary" />,
      title: "Social & Community Appeal",
      description:
        "Padel is inherently social, requiring four players per match, fostering community and making it ideal for social gatherings, corporate events, and family activities. Easy to learn but challenging to master.",
    },
    {
      icon: <TrendingUp size={28} className="text-primary" />,
      title: "Untapped Market Potential",
      description:
        "Despite global success, padel remains relatively unknown in the U.S., presenting a significant opportunity for early adopters. The lack of infrastructure means minimal competition, allowing for rapid growth and market penetration.",
    },
    {
      icon: <UserPlus size={28} className="text-primary" />,
      title: "Wide Demographic Appeal",
      description:
        "Target demographics include urban professionals, young adults, families, and retirees. These groups actively seek new activities offering both physical exercise and social interaction.",
    },
  ];

  // Statistics
  const statistics: StatisticItem[] = [
    { value: "90+", label: "Countries where padel is played" },
    { value: "25M+", label: "Active padel players worldwide" },
    { value: "2032", label: "Anticipated Olympic debut" },
  ];

  // Animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "6rem",
      transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
    },
  };

  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
      rotate: 360,
      scale: 1.15,
      transition: { duration: 0.8 },
    },
  };

  const statsContainerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const statsItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  const counterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Animate the stats container when it comes into view
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="opportunities" className="py-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl font-bold text-white"
            variants={headerVariants}
          >
            Market Opportunity
          </motion.h2>
          <motion.div
            className="h-1 bg-secondary mx-auto my-4"
            variants={lineVariants}
          ></motion.div>
          <motion.p
            className="text-lg sm:text-xl text-muted max-w-3xl mx-auto"
            variants={descriptionVariants}
          >
            Padel is poised for explosive growth in North America, presenting a
            unique investment opportunity in the sports and recreation industry.
          </motion.p>
        </motion.div>

        {/* Opportunity Cards */}
        <motion.div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          {opportunityCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border border-border p-6 sm:p-8 rounded-lg shadow-sm flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="mb-4 flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full"
                variants={iconVariants}
                whileHover="hover"
              >
                {card.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground mt-3 text-sm md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section with Animation */}
        <motion.div
          ref={statsRef}
          className="mt-16 bg-white border border-border p-6 sm:p-8 rounded-lg shadow-sm"
          variants={statsContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={statsItemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h3
                  className="text-4xl font-bold text-primary"
                  variants={counterVariants}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <CountUp end={stat.value} />
                </motion.h3>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Custom CountUp component using Framer Motion
interface CountUpProps {
  end: string;
}

const CountUp: React.FC<CountUpProps> = ({ end }) => {
  const [count, setCount] = useState<string>("0");
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true });

  // Extract the numeric part and the suffix if any
  const numericPart = end.replace(/[^0-9]/g, "");
  const suffix = end.replace(/[0-9]/g, "");

  React.useEffect(() => {
    if (isInView) {
      const endValue = parseInt(numericPart, 10);
      const duration = 1500;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * endValue);

        setCount(`${currentValue}${suffix}`);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, numericPart, suffix]);

  return <span ref={numberRef}>{count}</span>;
};
