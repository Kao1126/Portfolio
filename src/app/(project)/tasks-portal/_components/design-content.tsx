import {
  TitleDescriptionBlock,
  TitleBulletPointBlock,
  TitleImageBlock,
} from "@/components/article-block";

export default function DesignContent() {
  return (
    <section className="responsive-x-padding responsive-y-padding bg-white">
      <TitleBulletPointBlock
        title="Summary"
        points={[
          "Intuitive interface that makes it easy for consultants to access information.",
          "Streamline task allocation to eliminate manual effort.",
          "Consultant management page to manage consultant's skills and capacity.",
        ]}
        isPaddingTop={false}
      />
      <TitleDescriptionBlock
        title="Background"
        description="The payment process in the insurance industry involves multiple steps, requiring consultants to handle more than five tasks for a single payment. However, the current task management system, which relies on the RPG system and Google Sheets, is inefficient for navigating task information and lacks the necessary functionality for leaders to manage a large volume of tasks. Therefore, we aim to design and deliver software solutions to address these challenges."
      />

      <TitleDescriptionBlock
        title="Role & Deliverables
        "
        description="In this project, I worked closely with one product manager and a DevOps engineer. I was responsible for the end-to-end product design and delivery, from defining the problem and designing the user interface to implementing the solutions with full-stack technologies."
      />
      <TitleDescriptionBlock
        title="Objective"
        description="We aim to deliver technical solutions that allow consultants to easily browse their tasks, improve task processing efficiency, and support consultant leaders in effectively managing both tasks and their teams."
      />
      <TitleBulletPointBlock
        title="Target Audience"
        points={[
          "Consultants who are responsible for processing tasks of customer payment.",
          "Consultant leaders who are in charge of overseeing the processing of all tasks.",
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
            through multiple layers of the RPG system, which features an
            unintuitive interface. Additionally, data is scattered across the
            system, requiring consultants to switch between the RPG system and
            Google Sheets to gather sufficient information.
          </p>
          <div className="flex flex-col gap-2 h-fit section-responsive-description text-center items-center justify-center italics ">
            <img
              src={"./tasks-portal/rpg.png"}
              className="rounded-2xl h-auto object-cover w-full sm:w-1/2 lg:w-1/3"
            />
            <p className="italic text-gray-500">
              <strong>{"RPG Interface Example"}</strong>: the information in the
              RPG system is difficult to obtain , and the interface is
              unintuitive.
            </p>
          </div>

          <h2 className="section-responsive-subtitle ">
            2. Limitations for Task Management
          </h2>
          <p className="section-responsive-description ">
            While Google Sheets allows for real-time editing, it lacks status
            tracking and role-based permissions. Consultants are allowed to
            update, delete, and create new data without restrictions, which
            complicates the leader's ability to monitor task statuses and
            implement necessary corrections effectively.
          </p>
          <h2 className="section-responsive-subtitle ">
            3. Inefficient Task Allocation
          </h2>
          <p className="section-responsive-description ">
            Leaders manually assign tasks to consultants, which is
            time-consuming and can delay project progress. Each morning, leaders
            must manually allocate every task to the appropriate consultant
            based on its category and address any incomplete tasks from the
            previous day. This process is prone to human errors and biases,
            often requiring additional time to identify and correct mistakes.
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

          <h2 className="section-responsive-subtitle ">2. Components</h2>
          <p className="section-responsive-description">
            <strong>1. Sidebar</strong>: The sidebar provides a clear overview
            of the pages, which are categorized into two main sections:
            Application and Management. This structure helps consultant leaders
            easily navigate to their desired pages.
          </p>
          <p className="section-responsive-description">
            <strong>2. Status Block & Status Sheet</strong>: The status blocks
            represent "Completed," "On Hold," and "To Do" statuses. Each
            selected status block is highlighted with a distinct color. The
            status sheet displays the current status of a task, allowing
            consultants to select and update the task's status as needed.
          </p>
          <p className="section-responsive-description ">
            <strong>3. Multi-Selected Component</strong>: This component
            includes three versions: a non-selected button, a selected button,
            and a button with a dropdown. When the user selects the button, the
            dropdown is displayed, allowing consultants to choose multiple
            options. Once the options are selected, they are displayed within
            the button, enabling consultants to easily see which options have
            been included.
          </p>
          <p className="section-responsive-description ">
            <strong>4. Profile Sheet</strong>: Profile sheet includes the basic
            information of the consultant and the skills. The consutant can
            select the skills and update the max task.
          </p>
          <TitleImageBlock
            title="Components"
            description="components of the portal includes status block, sheets, and muti-select components."
            imgSrc="./tasks-portal/components.png"
          />
          <h2 className="section-responsive-subtitle ">3. Prototype</h2>
          <p className="section-responsive-description ">
            <strong>Low-fidelity Prototype</strong>: The prototype demonstrates
            the portal's functions, including filtering, status updates,
            information presentation, and task allocation. The low-fidelity
            prototype is used to test basic functionalities and ensure that user
            needs are met.{" "}
          </p>
          <div className="flex flex-col gap-2 h-fit section-responsive-description text-center items-center justify-center italics ">
            <img
              src={"./tasks-portal/low-fi.png"}
              className="rounded-2xl h-auto object-cover w-full sm:w-1/2 lg:w-1/2"
            />
            <p className="italic text-gray-500">
              <strong>{"Low Fidelity Prototype"}</strong>: this low-fidelity
              prototype demonstrates the basic functions of portal to test the
              user needs.
            </p>
          </div>
          <p className="section-responsive-description ">
            <strong>High-fidelity Prototype</strong>: This high-fidelity
            prototype demonstrates the final design of the portal, including the
            portal page, management page, and task allocation functions. The
            portal page features filtering and status update functionalities,
            enabling consultants to efficiently locate tasks and update their
            statuses. The management page includes a task allocation function,
            allowing leaders to assign tasks to consultants based on their
            skills and availability. Additionally, the management page provides
            functionality to update consultants' skills and the maximum number
            of tasks they can handle.
          </p>

          <TitleImageBlock
            title="High Fidelity Prototype"
            description="this is the final design of portal, which use contract color to highlight status, assignees, and skills to help the consultants to complete the tasks."
            imgSrc="./tasks-portal/high-fi.png"
          />
        </div>
        <div></div>
      </section>

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-8 h-fit justify-start ">
          <h1 className="section-responsive-title  font-medium">Outcome</h1>
          <div className="flex flex-col gap-6 h-fit justify-start section-responsive-description">
            <p>
              1. Provide leaders with a clear, real-time overview of task
              statuses and consultants' performance, enabling informed
              decision-making at a glance.
            </p>
            <p>
              2. Minimize human errors and biases from consultants, such as
              unintentionally deleting or modifying tasks.
            </p>
            <p>
              3. Streamline the task allocation process by automating
              assignments, eliminating the need for daily manual task
              distribution by leaders.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
