import ProjectHero from "@/components/project-hero";
import DesignContent from "@/app/(project)/tasks-portal/_components/design-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EngineerContent from "./_components/engineer-content";

export default function AIDocumentPortal() {
  return (
    <article className="bg-[#F9F9F9] min-h-screen">
      <ProjectHero
        title="Tasks Portal"
        description="Designed and developed the technical solution to automte the cliam
        process."
        role="UI/UX designer, Software developer"
        responsibility="UI/UX design and software development"
        company="Auto & General (Budget Direct)"
      />

      <Tabs
        defaultValue="design"
        className="pt-16 bg-white w-full flex flex-col items-center justify-center"
      >
        <TabsList className="grid w-fit grid-cols-2">
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="engineer">Engineer</TabsTrigger>
        </TabsList>
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
