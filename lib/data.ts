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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Alonefield LLC",
    location: "Intern",
    description:
      "Developed microservices in JavaScript and React, Updated websites, tested for functionality and performance, and gained server-side experience with Node.js and Linux for gaming projects.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022 - August 2022",
  },
  {
    title: "Front-End Developer and Wordpress Enggineer",
    location: "Webcydle",
    description:
      "As a WordPress Engineer and Frontend Developer, contributed to 50+ projects, including an AI-driven website automation tool. Managed website upgrades using React, Node.js, TypeScript, and WordPress, resolving technical issues and delivering innovative solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - February 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Quadcydle",
    description:
      "Led team in developing over 25 projects, including AI-driven website automation tool, and managed website upgrades using React, Node.js, and TypeScript.",
    icon: React.createElement(FaReact),
    date: "February 2023 - Decmeber 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelancer",
    description:
      "Provided comprehensive web development solutions using Next.js, Node.js, React, Express.js, Angular, and related technologies for diverse clientele, encompassing website creation, maintenance, and optimization.",
    icon: React.createElement(FaReact),
    date: "December 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Adding soon",
    description:
      "404 .......................... Not Found",
    tags: ["React", "Next.js", "Tailwind"],
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
