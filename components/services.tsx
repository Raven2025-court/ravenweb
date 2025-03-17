"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Ruler, Users, Award, Handshake } from "lucide-react";

interface ApproachItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string | number;
  title: string;
  description: string;
  detail: string;
  isReversed: boolean;
}

const approaches: ApproachItem[] = [
  {
    icon: <Users size={24} className="text-primary" />,
    title: "Team of Experts",
    description:
      "Engineers with international experience building courts for professional tournaments.",
  },
  {
    icon: <Ruler size={24} className="text-primary" />,
    title: "Tailored Design",
    description: "Custom solutions perfectly suited to your space and vision.",
  },
  {
    icon: <Briefcase size={24} className="text-primary" />,
    title: "Full-Service Installation",
    description:
      "End-to-end management from consultation to final court completion.",
  },
  {
    icon: <Award size={24} className="text-primary" />,
    title: "Quality Assurance",
    description:
      "We use high-performance materials that meet international standards.",
  },
  {
    icon: <Handshake size={24} className="text-primary" />,
    title: "Ongoing Support",
    description:
      "Beyond installation, we connect players, coaches, and events.",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Initial Client Meeting",
    description:
      "We discuss your vision, requirements, and answer any questions about the padel court installation process.",
    detail: "Understanding client needs and setting expectations.",
    isReversed: false,
  },
  {
    number: 2,
    title: "On-Site Walkthrough",
    description:
      "Our team visits your property to assess the space and determine the optimal court location.",
    detail: "Evaluating the space and identifying optimal court placement.",
    isReversed: true,
  },
  {
    number: 3,
    title: "Landscaping Assessment",
    description:
      "We evaluate terrain conditions and create a preparation plan for your site.",
    detail: "Planning site preparation needs for optimal court foundation.",
    isReversed: false,
  },
  {
    number: 4,
    title: "Budget Proposal",
    description:
      "We provide a comprehensive budget proposal with transparent pricing for your review.",
    detail:
      "Transparent pricing with detailed breakdown of costs and timeline.",
    isReversed: true,
  },
  {
    number: "5-7",
    title: "Project Execution",
    description:
      "We handle permits, landscaping, flooring, and construction of the court structure with expert precision.",
    detail:
      "Complete turnkey construction with regular updates throughout the process.",
    isReversed: false,
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

const timelineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export const ServicesAndProcesses: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Services & Process
          </h2>
          <motion.div
            className="w-24 h-1 bg-secondary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Elevate your sporting experience with expert padel court
            installation, designed for precision and long-term success.
          </p>
        </motion.div>

        {/* Our Approach */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold mb-8 text-white text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Approach
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {approaches.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-border p-6 rounded-lg shadow-sm text-center"
                variants={fadeInScale}
                custom={index}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "rgba(var(--secondary), 0.4)",
                    transition: { duration: 0.8 },
                  }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Process */}
        <div>
          <motion.h3
            className="text-2xl font-bold mb-8 text-white text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Process
          </motion.h3>
          <div className="relative">
            {/* Process timeline line */}
            <motion.div
              ref={timelineRef}
              className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-secondary/30 -translate-x-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
            ></motion.div>

            {/* Process Steps */}
            <motion.div
              className="space-y-12 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {processSteps.map((step, index) => (
                <ProcessStepItem key={index} step={step} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for each process step
const ProcessStepItem: React.FC<{ step: ProcessStep; index: number }> = ({
  step,
  index,
}) => {
  const stepVariants = {
    hidden: {
      opacity: 0,
      x: step.isReversed ? 40 : -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
      },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.15 + 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center">
      <motion.div
        className={`md:w-1/2 ${
          step.isReversed ? "order-1 md:order-none" : ""
        } ${
          step.isReversed ? "md:pr-12 md:text-right" : "md:pr-12 md:text-right"
        }`}
        variants={stepVariants}
      >
        {!step.isReversed ? (
          <>
            <h4 className="text-lg font-bold text-white mb-2">
              Step {step.number}: {step.title}
            </h4>
            <p className="text-muted">{step.description}</p>
          </>
        ) : (
          <motion.div
            className="bg-white p-4 rounded-lg"
            variants={detailVariants}
            whileHover={pulseAnimation}
          >
            <p className="text-sm text-muted-foreground">{step.detail}</p>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="md:w-14 justify-center my-4 md:my-0 hidden md:flex"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: index * 0.15 + 0.1,
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold z-10"
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 0 4px rgba(var(--secondary), 0.3)",
            transition: { duration: 0.3 },
          }}
        >
          {step.number}
        </motion.div>
      </motion.div>

      <motion.div
        className={`md:w-1/2 ${
          step.isReversed ? "order-none md:order-1" : ""
        } ${step.isReversed ? "md:pl-12" : "md:pl-12"}`}
        variants={stepVariants}
      >
        {step.isReversed ? (
          <>
            <h4 className="text-lg font-bold text-white mb-2">
              Step {step.number}: {step.title}
            </h4>
            <p className="text-muted">{step.description}</p>
          </>
        ) : (
          <motion.div
            className="bg-white p-4 rounded-lg"
            variants={detailVariants}
            whileHover={pulseAnimation}
          >
            <p className="text-sm text-muted-foreground">{step.detail}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
