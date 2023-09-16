import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import brightshore from "@/public/brightshore.png";
import eluix from "@/public/eluix.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Brightshore- Responsive Website",
    description:
      "A responsive education website exemplifying HTML, CSS, and JavaScript, embellished with animations, delivering a user-centric experience.",
    tags: ["HTML", "JavaScript", "CSS", "Data-AOS", "Media Queries"],
    imageUrl: brightshore,
    link: "https://aashiqc.github.io/Brightshore-website/"
  },
  {
    title: "Eluix-Web Application",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: eluix,
    link: "https://github.com/"
  },
  {
    title: "GPT-3",
    description:
      "Developed a responsive application of GPT-3 with react.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
    link: "https://github.com/"
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
  "Prisma",
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
