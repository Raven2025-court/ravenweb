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
      title: "Professional Tournament Padel Court",
      location: "Urban Setting",
      description:
        "A professional-grade padel court set up for tournament play with substantial spectator seating. The clay/orange court surface is enclosed by glass walls and features multiple sponsor banners including Claro, NOX, and other padel-related brands. The facility appears to be in an urban environment with residential buildings visible in the background.",
      features: [
        "Tournament-grade clay/orange playing surface",
        "Glass-walled enclosure for professional play",
        "Stadium-style blue seating on multiple sides",
        "Professional lighting fixtures for televised matches",
        "Multiple sponsor banners and advertising",
        "Temporary or permanent tournament setup",
        "Urban location with residential backdrop",
        "Appears to be under maintenance or setup with materials visible",
      ],
      completionDate: "Operational tournament venue",
      image: "/images/img1.png",
    },
    {
      id: 2,
      title: "Outdoor Padel Club Facility",
      location: "Santiago, Chile",
      description:
        "Multiple outdoor padel courts with bright blue playing surfaces, enclosed by glass walls and protective fencing. The facility features Gatorade sponsorship, spectator seating, and relaxation areas for players and visitors.",
      features: [
        "Outdoor padel courts with blue playing surfaces",
        "Glass enclosures with protective fencing",
        "Bright yellow spectator seating area",
        "Outdoor lounge area with tables and umbrellas",
        "Flood lighting for evening play",
        "Gatorade-sponsored facility with branding elements",
        "Green turf surrounding the courts",
      ],
      completionDate: "Already operational",
      image: "/images/img2.png",
    },
    {
      id: 3,
      title: "Puerto Varas Padel Complex",
      location: "Puerto Varas, Chile",
      description:
        "A modern padel facility featuring numbered courts with contrasting playing surfaces. Court 2 has a bright blue surface while Court 1 appears to have a clay/orange surface. The courts are enclosed by glass walls with protective mesh fencing above and surrounded by well-maintained artificial turf.",
      features: [
        "Numbered courts with different playing surfaces (blue and clay/orange)",
        "Glass-walled enclosures with protective mesh fencing",
        "Overhead lighting fixtures for evening play",
        "Artificial turf surroundings",
        "Adjacent building structure for facilities",
        "Outdoor setting with natural landscape views",
        "Clear court numbering system",
      ],
      completionDate: "Already operational",
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
