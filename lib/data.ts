import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Alonefield LLC | Internship",
    location: "Remote, Singapore",
    description:
      "During this internship, I utilized the MERN stack to develop full stack solutions. Achievements include a 20% increase in online sales through e-commerce platform development and a 25% improvement in user satisfaction due to enhanced user interfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - May 2023",
  },
  {
    title: "Sconton Pvt. Ltd. | Backend Developer",
    location: "Remote, Pune, India",
    description:
      "This internship highlighted my backend development skills with Node.js and MongoDB. I optimized database queries, improving performance by 60%, and reduced server downtime by 30% through effective troubleshooting and optimization.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Nov 2023",
  },
  {
    title: "IEEE DTU | Web Developer Intern",
    location: "Hybrid, New Delhi, India",
    description:
      "At IEEE DTU, I developed a responsive website using React, which significantly improved the user experience for members. My work involved implementing modern UI/UX practices, resulting in a more intuitive and engaging user interface.",
    icon: React.createElement(LuGraduationCap),
    date: "One-month period",
  },
  {
    title: "Quadcydle | Software Developer",
    location: "Remote, New Delhi, India",
    description:
      "In this role, I made technology accessible to small business owners by developing web tools that increased business efficiency by 35%. My digital marketing strategies led to a 40% rise in client acquisition, and post-maintenance services improved customer satisfaction by 50%.",
    icon: React.createElement(FaReact),
    date: "Nov 2023 - Jan 2024",
  },
  {
    title: "BrutWood | Full Stack Developer",
    location: "Remote, Canada",
    description:
      "At BrutWood, I utilized the MERN stack to build scalable solutions. My contributions increased user retention by 25%, boosted site traffic by 20%, and reduced deployment times by 50% through streamlined development processes.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - May 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelancer",
    description:
      "As a freelancer, I provided comprehensive web development solutions using Next.js, Node.js, React, Express.js, Angular, and related technologies. I completed over 20 projects independently, leading to a 95% client satisfaction rate and reducing server response times by 40% through backend optimizations.",
    icon: React.createElement(FaReact),
    date: "Jan 2023 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "PetCafe",
    description:
      "A simple Static website for a pet cafe, built with React, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Written in TypeScript.",
    tags: ["React", "Next.js", "Tailwind", "typescript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Weather app",
    description:
      "A simple weather app built with React, Tailwind CSS, and OpenWeatherMap API.",
    tags: ["React", "Tailwind", "OpenWeatherMap API"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Pet Adoption Website",
    description:
      " A simple pet adoption website built with Html, CSS5, and JavaScript.",
    tags: ["Html", "CSS5", "JavaScript"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
