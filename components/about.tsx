"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a self-taught <span className="font-medium">full-stack developer</span> with a passion for crafting innovative and user-friendly web applications.My core tech stack revolves around {" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>. As a freelancer, I have had the privilege of collaborating on diverse projects, honing my skills, and gaining invaluable experience in the industry.
      </p>
    </motion.section>
  );
}
