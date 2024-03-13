import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import brightshore from "@/public/brightshore.png";
import travel from "@/public/travel.png";
import boxpot from "@/public/image.png"
import sincere from "@/public/sincere.png"

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
    title: "Boxpot Agency Website",
    description: "Developed modern UI Web app for Boxpot agency. ",
    tags: ["React", "Next.js", "Smooth Scroll", "Tailwind", "Framer"],
    imageUrl: boxpot,
    link: "https://boxpot.vercel.app/"
  },
  {
    title: "Brightshore Institution Website",
    description:
      "A responsive education website exemplifying HTML, CSS, and JavaScript, embellished with animations, delivering a user-centric experience.",
    tags: ["HTML", "JavaScript", "CSS", "Data-AOS", "Media Queries"],
    imageUrl: brightshore,
    link: "https://brightshore.in/"
  },
  {
    title: "Sincere Academy Website",
    description:
      "Developed a responsive website for a Sincere Academy.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: sincere,
    link: "https://sincereacademy-org.vercel.app/"
  },
  {
    title: "Travelexcite Travel Website",
    description:
      "Developed a responsive website for a Travel agency with unique features.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: travel,
    link: "https://travelxcite.vercel.app/"
  },
  {
    title: "Event Management Software",
    description:
      "Developed a Software for Managing event registration, Competition management, result announcement.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "HTML2Canvas"],
    imageUrl: corpcommentImg,
    link: "https://github.io/"
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
  "Zustand",
  "gsap",
  "Express",
  "Framer Motion",
] as const;
