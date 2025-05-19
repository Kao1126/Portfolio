import {
  TitleDescriptionBlock,
  TitleBulletPointBlock,
  TitleImageBlock,
} from "@/components/article-block";

export default function EngineerContent() {
  return (
    <section className="responsive-x-padding responsive-y-padding bg-white">
      <TitleDescriptionBlock
        title="Full-Stack Technologies"
        description="Next.js, React.js, TypeScript, Tailwind CSS, Shadcn/UI, PostgreSQL, GraphQL, Prisma"
        sectionClassName="pt-0"
      />

      <TitleDescriptionBlock
        title="CI/CD & Deployment"
        description="Git/GItLab, Docker, GCP, Google Cloud Build, Google Cloud Run, Google Cloud SQL"
      />

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-10 h-fit justify-start">
          <h1 className="section-responsive-title  font-medium">
            Why Next.js?
          </h1>
          <h2 className="section-responsive-subtitle ">
            Full-Stack Capabilities
          </h2>
          <p className="section-responsive-description ">
            I am responsible for building both the backend and the frontend of
            the application. In Next.js, I can use **API routes** in
            <strong>pages/api/</strong> to create backend functions directly and
            utilize Prisma to read and update data through the database.
          </p>

          <h2 className="section-responsive-subtitle ">
            2. Built-in Server-Side Rendering (SSR) & Static Site Generation
            (SSG)
          </h2>
          <p className="section-responsive-description ">
            Next.js supports <strong>SSR</strong> and <strong>SSG</strong> out
            of the box, helping you optimize performance:
          </p>
          <p className="section-responsive-description ">
            <strong>SSR</strong>: Dynamically render pages on each request with
            fresh data.
          </p>
          <p className="section-responsive-description ">
            <strong>SSG</strong>: Pre-generate pages at build time for speed and
            scalability.
          </p>
        </div>
      </section>
    </section>
  );
}
