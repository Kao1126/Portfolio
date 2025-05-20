"use client";

import { Linkedin } from "lucide-react";
import UseCaseContainer from "@/components/use-case-constinaer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariants } from "@/lib/constant";

export default function Home() {
  const heroRef = useRef(null);
  const caseRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const caseInView = useInView(caseRef, { once: true });

  return (
    <main className="bg-[#F3F3F2]">
      {/* Main */}
      <section className="w-full flex flex-col justify-center">
        <motion.section
          ref={heroRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="flex flex-col gap-8 h-screen justify-center responsive-x-padding bg-white rounded-b-[32px] sm:rounded-b-[50px] lg:rounded-b-[100px] items-center sm:items-start"
        >
          <motion.img
            src="./avatar.png"
            alt="Avatar"
            className="rounded-full w-[100px] h-[100px] object-cover"
            variants={fadeUpVariants}
          />
          <motion.h1
            className="text-[32px] sm:text-[36px] lg:text-[55px] font-normal text-center sm:text-left"
            variants={fadeUpVariants}
            transition={{ delay: 0.1 }}
          >
            I'm Kevin Kao, a UX/UI designer and software engineer. I love
            turning ideas into real products.
          </motion.h1>
          <motion.a
            href="https://www.linkedin.com/in/wei-cheng-kao/"
            className="flex items-center justify-center border-2 border-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300"
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            <Linkedin stroke="1.25px" fill="black" />
          </motion.a>
        </motion.section>

        {/* Case Study Section */}
        <motion.section
          ref={caseRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={caseInView ? "visible" : "hidden"}
          className="flex flex-col h-fit justify-center items-center responsive-x-padding responsive-y-padding gap-12"
        >
          <div className="w-full flex items-start justify-start flex-col gap-4">
            <h1 className="responsive-title">Case Study</h1>
            <h2 className="responsive-description">
              Explore my selected projects, showcasing my dedication to
              innovative design.
            </h2>
          </div>

          <div className="flex gap-12 w-full flex-col md:flex-row">
            <UseCaseContainer
              imgSrc="./ai-document-portal/ai-document-portal-mockup.png"
              title="AI Document Portal"
              description="This project streamlines the insurance claims process by automating client document submission and consultant task management."
              linkSrc="/ai-document-portal"
              roles={["UX/UI Designer", "Software Engineer"]}
            />
            <UseCaseContainer
              imgSrc="./tasks-portal/tasks-portal-mockup.png"
              title="Tasks Portal"
              description="This proposal addresses inefficiencies in the insurance payment task management system, which currently relies on outdated tools like RPG and Google Sheets."
              linkSrc="/tasks-portal"
              roles={["UX/UI Designer", "Software Engineer"]}
            />
          </div>
        </motion.section>
      </section>
    </main>
  );
}
