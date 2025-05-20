"use client";

import ProjectHero from "@/components/project-hero";
import DesignContent from "@/app/(project)/tasks-portal/_components/design-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EngineerContent from "./_components/engineer-content";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants } from "@/lib/constant";
import { useRef } from "react";

export default function AIDocumentPortal() {
  const tabRef = useRef(null);
  const isInView = useInView(tabRef, { once: true });

  return (
    <article className="bg-[#F9F9F9] min-h-screen">
      <ProjectHero
        title="Tasks Portal"
        description="Designed and developed the technical solution to automate the claim process."
        role="UI/UX designer, Software developer"
        responsibility="UI/UX design and software development"
        company="Auto & General (Budget Direct)"
      />

      <Tabs
        defaultValue="design"
        className="pt-16 bg-white w-full flex flex-col items-center justify-center"
      >
        <motion.div
          ref={tabRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TabsList className="grid w-fit grid-cols-2 gap-4">
            <motion.div variants={fadeUpVariants} transition={{ delay: 0.1 }}>
              <TabsTrigger value="design">Design</TabsTrigger>
            </motion.div>
            <motion.div variants={fadeUpVariants} transition={{ delay: 0.2 }}>
              <TabsTrigger value="engineer">Engineer</TabsTrigger>
            </motion.div>
          </TabsList>
        </motion.div>

        <TabsContent value="design">
          <DesignContent />
        </TabsContent>
        <TabsContent value="engineer">
          <EngineerContent />
        </TabsContent>
      </Tabs>
    </article>
  );
}
