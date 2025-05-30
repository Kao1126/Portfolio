import {
  TitleDescriptionBlock,
  TitleImageBlock,
} from "@/components/article-block";

export default function EngineerContent() {
  return (
    <section className="responsive-x-padding responsive-y-padding bg-white">
      <TitleImageBlock
        title="Software Architecture"
        description="The software architecture of the AI Document Portal consists of three main components: the client-facing chatbot, the consultant-facing portal, and the AI server."
        imgSrc="./ai-document-portal/software-architecture.png"
      />
      <TitleDescriptionBlock
        title="Full-Stack Technologies"
        description="Next.js, React.js, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL, GraphQL, Prisma"
      />

      <TitleDescriptionBlock
        title="CI/CD & Deployment"
        description="Git/GItLab, Docker, GCP, Google Cloud Build, Google Cloud Run, Google Cloud SQL"
      />

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-10 h-fit justify-start">
          <h1 className="section-responsive-title  font-medium">
            {"Microservice Architecture"}
          </h1>
          <h2 className="section-responsive-subtitle ">1. System Modules</h2>
          <p className="section-responsive-description ">
            <strong>Chatbot Service</strong> : built with{" "}
            <strong>Next.js</strong>, this handles client interactions and file
            uploads.
          </p>
          <p className="section-responsive-description ">
            <strong>AI Service</strong> : a <strong>Python-based</strong>{" "}
            backend responsible for analyzing uploaded files and generating
            tasks.
          </p>
          <p className="section-responsive-description ">
            <strong>Chatbot Service</strong> : built with{" "}
            <strong>Next.js</strong>, this handles client interactions and file
            uploads.
          </p>

          <p className="section-responsive-description ">
            <strong>Portal Service</strong> : another <strong>Next.js</strong>{" "}
            app that provides consultants with a dashboard to view and manage
            tasks.
          </p>

          <h2 className="section-responsive-subtitle ">
            2. Why Microservice Architecture?
          </h2>
          <p className="section-responsive-description ">
            This project comprises three primary services: a client-facing
            chatbot, an AI service, and an internal-facing portal. Using a
            microservices architecture allows us to adopt different technology
            stacks for each service — the chatbot and portal are built with
            Next.js, while the AI service is implemented in Python. This
            architecture also provides fault isolation, which is crucial because
            our services cater to diverse user groups, including clients and
            consultants. If one microservice fails, it won’t bring down the
            entire system.
          </p>
        </div>
        <TitleDescriptionBlock
          title="Why GraphQL?"
          description="We use GraphQL in our internal-facing service to handle the flexible and varied data needs generated by the AI service. Since different teams are responsible for processing different types of tasks, they each require access to specific parts of the data. GraphQL helps us efficiently fetch exactly the data each team needs, reducing over-fetching and simplifying the data handling logic on the frontend."
        />
      </section>
    </section>
  );
}
