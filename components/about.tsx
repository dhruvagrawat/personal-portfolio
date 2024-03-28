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
          As a current{" "}
        <span className="font-bold">Computer Science </span> student. I've embarked on a journey into the realm of programming through freelance work,{" "}
        opting for practical experience over a traditional bootcamp route. Within this domain, I've discovered a passion for <span className="font-bold">full-stack web development</span>.{" "}
        <span className="italic">particularly relishing the challenges of problem-solving.</span>. I <span>love</span> the
        feeling of finally figuring out a solution to a problem. My expertise lies in {" "}
        <span className="font-bold">
        React, Next.js, Node.js, and MongoDB.
        </span>
        . I'm also proficient in TypeScript, JavaScript and continuously explore new technologies to broaden my knowledge base.  {" "}
        <span className="font-bold">full-time position</span> as a software
        developer. In pursuit of a  I eagerly anticipate the opportunity to apply my skills and continue my professional growth.
      </p>

      <p>
        <span className="italic">Beyond the world of code,</span>, I find joy in diverse hobbies. From gaming sessions to movie marathons, and spending quality time with my cat, I relish in various forms of relaxation. Additionally, my interests extend to the intellectual realm, as I immerse myself in books covering topics ranging from{" "}
        <span className="font-bold">history and philosophy.</span>.
      </p>
    </motion.section>
  );
}
