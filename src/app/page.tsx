import { Linkedin } from "lucide-react";
import UseCaseContainer from "@/components/use-case-constinaer";

export default function Home() {
  return (
    <main className="bg-[#F3F3F2] ">
      {/* Main */}
      <section className="w-full  flex flex-col justify-center">
        <section className="flex flex-col gap-8 h-screen justify-center responsive-x-padding bg-white rounded-b-[32px] sm:rounded-b-[50px]  lg:rounded-b-[100px] items-center sm:items-start">
          <img
            src="./avatar.png"
            className="rounded-full w-[100px] h-[100px] object-cover"
          />
          <h1 className="text-[32px] sm:text-[36px] lg:text-[55px] font-normal text-center sm:text-left">
            I'm Kevin Kao, a UX/UI designer and software engineer. I love
            turning ideas into real products.
          </h1>

          <a
            href="https://www.linkedin.com/in/wei-cheng-kao/"
            className="flex items-center justify-center border-2 border-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300"
          >
            <Linkedin stroke="1.25px" fill="black" />
          </a>
        </section>

        <section className="flex flex-col  h-fit justify-center items-center responsive-x-padding responsive-y-padding gap-12">
          <div className="w-full flex items-start justify-start flex-col gap-4">
            <h1 className="responsive-title">Case Study</h1>

            <h2 className="responsive-description">
              Explore my selected projects, showcasing my dedication to
              innovative design.
            </h2>
          </div>

          {/* Use case part */}
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
        </section>
      </section>

      {/* Footer */}
    </main>
  );
}
