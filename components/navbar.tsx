"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/icon.png";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  {
    name: "About",
    section: "about",
  },
  {
    name: "Opportunities",
    section: "opportunities",
  },
  {
    name: "Services",
    section: "services",
  },
  {
    name: "Projects",
    section: "projects",
  },
  {
    name: "Contact",
    section: "contact",
  },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle scrolling
  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    const section = document.getElementById(sectionId);

    if (section) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);

      // Smooth scroll to section
      window.scrollTo({
        top: section.offsetTop - 100, // Offset to account for navbar height
        behavior: "smooth",
      });

      // Update active section
      setActiveSection(sectionId);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust offset for better detection

      // Find the current active section based on scroll position
      const currentSection = links.find((link) => {
        const section = document.getElementById(link.section);
        if (!section) return false;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (currentSection) {
        setActiveSection(currentSection.section);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial active section
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: "none" as const,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Add this near the top of your component with your other state variables
  const [scrollY, setScrollY] = useState(0);

  // Add this useEffect to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial value
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed ${
        scrollY > 0 ? "top-4" : "top-4"
      } z-50 left-1/2 transform -translate-x-1/2 bg-white border rounded-full shadow-md px-4 w-[80vw] lg:w-[70vw] xl:w-[60vw]`}
    >
      <div className="px-4 py-2 md:py-0 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="hover:cursor-pointer md:px-3 md:py-2 md:rounded-full flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src={logo}
              alt="Logo Image"
              className="size-8 md:size-10 relative"
            />
            <p className="text-primary text-lg font-semibold hidden md:flex">
              Raven Padel
            </p>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Menu
            className="size-5 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-4 xl:hidden"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <nav className="flex flex-col space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => scrollToSection(link.section, e)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === link.section
                    ? "bg-primary/10 text-primary"
                    : "text-primary/80 hover:bg-primary/5"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="px-4 py-2 bg-primary rounded-full text-white text-center font-medium mt-2"
            >
              Let&apos;s talk
            </a>
          </nav>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden xl:flex gap-2 lg:gap-4 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={navItemVariants}
            >
              <a
                href={`#${link.section}`}
                onClick={(e) => scrollToSection(link.section, e)}
                className={`hover:bg-primary/10 hover:cursor-pointer text-primary/80 hover:text-primary text-xs lg:text-sm px-3 py-2 rounded-full hidden lg:flex tracking-tight font-semibold ${
                  activeSection === link.section
                    ? "bg-primary/10 text-primary"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </motion.div>
          ))}
          <motion.div
            custom={links.length}
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={navItemVariants}
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="px-4 py-2 bg-primary rounded-full text-white tracking-tight font-medium hover:bg-primary/90 transition-colors"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
}
