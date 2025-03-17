"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { FancyButton } from "./ui/button";
import Image from "next/image";

export function RecentProjects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Mountain View Club Indoor Courts",
      location: "Denver, Colorado",
      description:
        "Two premium indoor padel courts with climate control, professional lighting, and spectator areas. Custom designed to maximize player experience while fitting into the existing club facility.",
      features: [
        "Indoor climate-controlled environment",
        "Stadium seating for 50+ spectators",
        "Professional LED lighting",
        "Custom glass walls",
        "Premium artificial turf surface",
      ],
      completionDate: "January 2025",
      image: "/images/img1.png",
    },
    {
      id: 2,
      title: "Oceanside Resort Outdoor Courts",
      location: "Miami, Florida",
      description:
        "Four outdoor padel courts situated with ocean views. Weather-resistant materials and drainage systems designed for coastal conditions. Features include night lighting and shaded spectator areas.",
      features: [
        "Weather-resistant construction",
        "Night lighting system",
        "Shaded viewing areas",
        "Custom blue playing surface",
        "Integrated sound system",
      ],
      completionDate: "November 2024",
      image: "/images/img2.png",
    },
    {
      id: 3,
      title: "City Sports Complex Tournament Courts",
      location: "Chicago, Illinois",
      description:
        "Tournament-grade facility featuring six padel courts with 360° viewing capability. Built to international competition standards with broadcast-ready infrastructure and premium player amenities.",
      features: [
        "360° spectator viewing",
        "Tournament-grade specifications",
        "Broadcast camera positions",
        "Player lounge and warm-up areas",
        "Electronic scoreboard system",
      ],
      completionDate: "March 2025",
      image: "/images/img3.png",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest padel court installations across North America,
            each designed to meet our clients&apos; unique needs and
            specifications.
          </p>
        </div>

        <div className="relative bg-white rounded-lg shadow-xl border border-border overflow-hidden">
          {/* Project Image Area */}
          <div className="grid md:grid-cols-2">
            <div className="bg-secondary/20 flex items-center justify-center p-4 min-h-[400px]">
              {/* Placeholder for project image */}
              <div className="relative w-full h-full">
                <Image
                  src={projects[activeProject].image}
                  alt="Project Image 1"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-secondary/20 text-primary text-sm py-1 px-3 rounded-full font-medium">
                  Completed {projects[activeProject].completionDate}
                </span>
                <span className="text-sm text-muted-foreground">
                  {activeProject + 1}/{projects.length}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {projects[activeProject].title}
              </h3>

              <p className="text-accent font-medium mb-6">
                {projects[activeProject].location}
              </p>

              <p className="text-muted-foreground mb-8">
                {projects[activeProject].description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-primary mb-4">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end">
                <div className="flex space-x-2">
                  <button
                    onClick={prevProject}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
                  >
                    <ChevronLeft size={20} className="text-primary" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 transition-colors"
                  >
                    <ChevronRight size={20} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`p-4 border rounded-lg text-left transition-all ${
                activeProject === index
                  ? "border-secondary bg-secondary/10"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <h4 className="font-medium text-primary truncate">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground truncate">
                {project.location}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <FancyButton text="Get a Quote" onClick={scrollToContact} />
        </div>
      </div>
    </section>
  );
}
