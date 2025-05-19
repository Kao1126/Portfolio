import {
  TitleDescriptionBlock,
  TitleBulletPointBlock,
} from "@/components/article-block";

export default function DesignContent() {
  return (
    <section className="responsive-x-padding responsive-y-padding bg-white">
      {/* <TitleBulletPointBlock
        title="Summary"
        points={[
          "Automates client document submission with an AI chatbot.",
          "Verifies documents and auto-generates tasks for consultants.",
          "Centralized portal for clear consultant task management.",
          "Reduces manual work and human error.",
          "Speeds up the insurance claims process.",
        ]}
        isPaddingTop={false}
      /> */}
      <TitleDescriptionBlock
        title="Background"
        description="The payment process in the insurance industry involves several steps, so consultants must handle more than five tasks for each payment. However, the current task management system is composed of the RPG system and Google Sheets.  Both are ineffective for navigating task information and lack the functionality for the consultant's leader to manage the large number of tasks. Thus, we aim to design and deliver the software solutions to address those issues."
      />

      <TitleDescriptionBlock
        title="Role & Deliverables
        "
        description="In this project, I worked closely with one product manager and a DevOps engineer. I was responsible for the end-to-end product design and delivery, from defining the problem and designing the user interface to implementing the solutions with full-stack technologies."
      />
      <TitleDescriptionBlock
        title="Objective"
        description="We aim to deliver technical solutions that enable consultants to browse their tasks with ease, increase task processing efficiency, and assist consultant leaders in managing both tasks and consultants."
      />
      <TitleBulletPointBlock
        title="Target Audience"
        points={[
          "Consultants who are responsible for processing customer claims.",
          "Consultant leaders who are in charge of overseeing the processing of all claims.",
        ]}
      />

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-10 h-fit justify-start">
          <h1 className="section-responsive-title  font-medium">
            {"Identified Problems"}
          </h1>
          <h2 className="section-responsive-subtitle ">
            1. Unstructured and Insufficient Information
          </h2>
          <p className="section-responsive-description ">
            In current systems, consultants often struggle to access
            information. To find specific task details, they must navigate
            through multiple layers of the RGB system, which has an unintuitive
            interface. Additionally, data is spread throughout the entire
            system. The consultants must switch between RPG and Google Sheets to
            obtain adequate information.
          </p>
          <div className="flex flex-col gap-2 h-fit section-responsive-description text-center items-center justify-center italics ">
            <img
              src={"./tasks-portal/rpg.png"}
              className="rounded-2xl h-auto object-cover w-full sm:w-1/2 lg:w-1/3"
            />
            <p className="italic text-gray-500">
              <strong>{"RPG Interface Example"}</strong>: The information in the
              RPG system is difficult to obtain , and the interface is
              unintuitive.
            </p>
          </div>

          <h2 className="section-responsive-subtitle ">
            2. Limitations for Task Management
          </h2>
          <p className="section-responsive-description ">
            While Google Sheets allows for real-time editing, it lacks status
            tracking and role-based permissions. Each consultant is permitted to
            update, delete, and create new data. This complicates the leader's
            ability to track status and implement necessary fixes.
          </p>
          <h2 className="section-responsive-subtitle ">
            3. Inefficient Task Allocation
          </h2>
          <p className="section-responsive-description ">
            I discovered that leaders manually assign tasks to consultants,
            which consumes significant time and can delay project progress. Each
            morning, the leader must manually assign every task to the
            corresponding consultant based on its class and address any
            remaining tasks that are not completed before the end of the day.
            This can easily result in human errors and bias, requiring
            additional time to correct them.
          </p>
        </div>
      </section>

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-10 h-fit justify-start ">
          <h1 className="section-responsive-title  font-medium">Design</h1>
          <h2 className="section-responsive-subtitle ">1. Solution</h2>
          <div className="section-responsive-description">
            To tackle the mentioned issues, I provide the following functions:
            <ul className="flex pt-3.5 gap-3.5 flex-col h-fit w-full section-responsive-description ">
              <li>
                <strong>Structured Data Table</strong>: Displays task
                information in a clear and organized format with filtering
                capabilities, enabling users to find relevant data quickly.
              </li>
              <li>
                <strong>Automated Task Allocation</strong>: Assigns tasks
                intelligently based on task category and consultant expertise,
                reducing manual effort and human error.
              </li>
              <li>
                <strong>Task Status Dashboard</strong>: Provides a visual
                overview of all tasks, allowing for easy progress tracking at a
                glance.
              </li>
              <li>
                <strong>Status Updates by Consultants</strong>: Enables
                consultants to update task statuses (e.g. To-do, Pending, and
                Completed), ensuring transparency and up-to-date tracking.
              </li>
            </ul>
          </div>
          <h2 className="section-responsive-subtitle ">2. Prototype</h2>
          <p className="section-responsive-description ">
            <strong>Low-fidelity Prototype</strong> : The prototype demonstrates
            the interaction between the client-facing chatbot and the
            consultant-facing portal.
          </p>
          <p className="section-responsive-description ">
            <strong>High-fidelity Prototype</strong> : The prototype
            demonstrates the details of the consultant-facing portal, including
            the task and subtask components.
          </p>
          <div className="flex flex-col gap-2 h-fit section-responsive-description text-center items-center justify-center italics ">
            <img
              src={"./tasks-portal/low-fi.png"}
              className="rounded-2xl h-auto object-cover w-full sm:w-1/2 lg:w-1/2"
            />
            <p className="italic text-gray-500">
              <strong>{"Low Fidelity Prototype"}</strong>: The information in
              the RPG system is difficult to obtain , and the interface is
              unintuitive.
            </p>
          </div>
        </div>
        <div></div>
      </section>

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-8 h-fit justify-start ">
          <h1 className="section-responsive-title  font-medium">Outcome</h1>
          <div className="flex flex-col gap-6 h-fit justify-start section-responsive-description">
            <p>
              1. Enable the leader to understand the real-time status of tasks
              and consultants' performance at a glance.
            </p>
            <p>
              2. Reduce human mistakes and bias from consultants, such as
              unintentionally removing tasks.
            </p>
            <p>
              3. Assist the leader in automating the task allocation process,
              rather than manually assigning tasks daily.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
