"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  FolderGit2,
  Hammer,
  Mail,
  Download,
} from "lucide-react";
import { AnimatedTooltip } from "./animated-tooltip";

const navItems = [
  {
    id: 1,
    name: "Home",
    designation: "Go to Home",
    icon: <Home className="h-6 w-6" />,
    target: "home",
  },
  {
    id: 2,
    name: "About",
    designation: "About Me",
    icon: <User className="h-6 w-6" />,
    target: "about",
  },
  {
    id: 3,
    name: "Projects",
    designation: "My Projects",
    icon: <FolderGit2 className="h-6 w-6" />,
    target: "projects",
  },
  {
    id: 4,
    name: "Skills",
    designation: "Tech Stack",
    icon: <Hammer className="h-6 w-6" />,
    target: "skills",
  },
  {
    id: 5,
    name: "Contact",
    designation: "Get in Touch",
    icon: <Mail className="h-6 w-6" />,
    target: "contact",
  },
];

const AnimatedTooltipNav = () => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.target);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 bg-black/80 p-4 px-6 rounded-full shadow-xl backdrop-blur-md">
      {navItems.map((item) => (
        <div
          key={item.id}
          onClick={() => scrollTo(item.target)}
          className={`cursor-pointer transition duration-300 ${
            activeId === item.target ? "text-purple-400" : "text-white"
          }`}
        >
          <AnimatedTooltip
            items={[
              {
                id: item.id,
                name: item.name,
                designation: item.designation,
              },
            ]}
          >
            <span>{item.icon}</span>
          </AnimatedTooltip>
        </div>
      ))}

      {/* 📄 Resume Download */}
      <a
        href="../../../public/Bhullar_IkmannResume.pdf"
        download
        className="cursor-pointer text-white hover:text-green-400 transition mt-4"
        title="Download Resume"
      >
        <AnimatedTooltip
          items={[
            {
              id: 99,
              name: "Resume",
              designation: "Download CV",
            },
          ]}
        >
          <Download className="h-6 w-6" />
        </AnimatedTooltip>
      </a>
    </div>
  );
};

export default AnimatedTooltipNav;