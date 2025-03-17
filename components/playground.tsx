"use client";

import { motion } from "framer-motion";
import { CourtCanvas } from "./animations/court-canvas";

export function Playground() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="playground" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Interactive Court Preview
          </h2>
          <motion.div
            className="w-24 h-1 bg-secondary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our standard padel court design in 3D. For detailed views of
            our custom-built courts and completed projects, please visit our
            Projects section.
          </p>
        </motion.div>
        {/* 3D model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-[90vw] md:max-w-[70vw] mx-auto">
            <CourtCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
