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
          "Automates client document submission with an AI chatbot.",
          "Verifies documents and auto-generates tasks for consultants.",
          "Centralized portal for clear consultant task management.",
          "Reduces manual work and human error.",
          "Speeds up the insurance claims process.",
        ]}
        isPaddingTop={false}
      />
      <TitleDescriptionBlock
        title="Background"
        description="The claims process involves both client-facing and professional aspects. Consultants need to request several documents from clients via email, verify the documents, and manually create tasks for them. However, this requires a lot of time because clients sometimes send invalid documents, so it is necessary to send an email requesting clarification again. Additionally, verifying the documents is challenging because there are many types of documents, such as driving history from different stages. We aim to provide technical solutions for both clients and consultants to automate this process and minimize the cost of effort and time."
      />

      <TitleDescriptionBlock
        title="Role & Deliverables
        "
        description="I worked closely with two engineers who were in charge of the machine learning server and DevOps, respectively, and a project manager. I am responsible for the UI/UX design and full-stack software engineering for the consultant-facing portal and client-facing chatbot."
      />
      <TitleDescriptionBlock
        title="Objective"
        description="The project aims to automate and streamline the claims process by reducing manual tasks for consultants and improving communication with clients. Key goals include automating document collection and verification, minimizing repetitive email exchanges, standardizing task creation, intelligently handling diverse document types, and ultimately reducing time and operational costs while improving the overall user experience."
      />
      <TitleBulletPointBlock
        title="Target Audience"
        points={[
          "Consultants who need to streamline and automate claim-related tasks.",
          "Clients who require a clearer, more efficient document submission experience.",
        ]}
      />

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-10 h-fit justify-start">
          <h1 className="section-responsive-title  font-medium">
            {"Identified Problems"}
          </h1>
          <h2 className="section-responsive-subtitle ">
            1. Manual and Time-Consuming Communication
          </h2>
          <p className="section-responsive-description ">
            {" "}
            Consultants must rely on email to request documents from clients,
            but clients often struggle to understand what is needed or how to
            obtain the correct records. As a result, they frequently send
            incomplete or incorrect documents, requiring consultants to follow
            up with multiple emails or phone calls. This repetitive
            communication significantly slows down the claims process and
            consumes valuable consultant time.
          </p>

          <h2 className="section-responsive-subtitle ">
            2. Inefficient Document Verification Process
          </h2>
          <p className="section-responsive-description ">
            The document verification process is also time-consuming for
            consultants. They must be familiar with various document types, such
            as driving records from different jurisdictions or periods, each
            with unique formats and requirements. This complexity makes it
            difficult to determine whether a document is valid or complete
            quickly. Without standardized validation tools, consultants are
            forced to rely on manual checks, which increases the risk of errors
            and delays in the claims process.
          </p>
          <h2 className="section-responsive-subtitle ">
            3. Lack of Task Automation
          </h2>
          <p className="section-responsive-description ">
            Currently, consultants must manually create and manage tasks based
            on the documents received from clients. This includes tracking
            document status, setting reminders, and updating progress—all
            without system support. The absence of automation leads to
            inconsistent workflows, increases the risk of oversight, and adds
            unnecessary administrative burden. A lack of task assignment or
            status tracking makes it difficult to scale operations efficiently
            or maintain visibility across multiple cases.
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
                <strong>AI Chatbot Verification</strong>: Enables clients to
                upload documents and perform real-time document verification
                using artificial intelligence (AI). Clients can ask questions
                about accessing the records, and the chatbot will provide
                instructions and relevant references. Once the chatbot confirms
                the uploaded documents are correct, it will create the tasks and
                send them to the consultant-facing portal.
              </li>
              <li>
                <strong>Automated Task Creation</strong>: Create the tasks and
                send them to the consultant-facing portal once the chatbot
                confirms the uploaded documents are correct.
              </li>
              <li>
                <strong>Workflow Portal</strong>: Provides a visual overview of
                all tasks and presents sufficient information, enabling
                consultants to process their tasks effectively.
              </li>
            </ul>
          </div>
          <h2 className="section-responsive-subtitle ">2. User Flow</h2>
          <p className="section-responsive-description ">
            The user flow illustrates the process of how clients interact with
            the AI chatbot to upload documents. The chatbot guides them through
            the document submission process, verifies the documents, and creates
            tasks for consultants.
          </p>
          <TitleImageBlock
            title="User-flow"
            description="The user flow presents how out target audience interacts with our solution."
            imgSrc="./ai-document-portal/user-flow.png"
          />
          <h2 className="section-responsive-subtitle ">3. Components</h2>
          <p className="section-responsive-description ">
            <strong>Task Components</strong> : These components are designed to
            present the task status, including the task name, status, and
            assignee. The contract color indicates the task status, such as "in
            progress" or "completed." and the avatar represents the consultant
            assigned to the task. Those contract colors and avatars are designed
            to be easily recognizable and visually appealing, allowing
            consultants to quickly identify the status of their tasks.
          </p>
          <p className="section-responsive-description ">
            <strong>Subtask Components</strong> : These components aim to
            present the task information assist the consultants to complete the
            subtask. The gray area represents the task information that
            consultants need to complete the subtask, such as class, created
            date, and due date. The different icons represent the different
            types of documents that the task includes.
          </p>
          <div className="flex flex-col sm:flex-row  gap-10 h-fit justify-start items-center">
            <TitleImageBlock
              title="Task Components"
              description="These include designs of avatar and status badge."
              imgSrc="./ai-document-portal/component-1.png"
            />
            <TitleImageBlock
              title="Subtask Components"
              description="These present the relationship between task information and subtasks."
              imgSrc="./ai-document-portal/component-2.png"
            />
          </div>
          <h2 className="section-responsive-subtitle ">4. Prototype</h2>
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
          <div className="flex flex-col sm:flex-row  gap-10 h-fit justify-start items-center ">
            <TitleImageBlock
              title="Low-fidelity Prototype"
              description="The prototype demonstrates the interaction between the client-facing chatbot and the consultant-facing portal."
              imgSrc="./ai-document-portal/low-fi.png"
            />

            <TitleImageBlock
              title="High-fidelity Prototype"
              description="The prototype demonstrates the interaction between the client-facing chatbot and the consultant-facing portal."
              imgSrc="./ai-document-portal/high-fi.png"
            />
          </div>
        </div>
        <div></div>
      </section>

      <section className="pt-16 bg-white h-fit">
        <div className="flex flex-col gap-8 h-fit justify-start ">
          <h1 className="section-responsive-title  font-medium">Outcome</h1>
          <div className="flex flex-col gap-6 h-fit justify-start section-responsive-description">
            <p>
              1. <strong>Reduced back-and-forth emails</strong> by enabling
              clients to interact with an intelligent chatbot that provides
              clear, step-by-step guidance on what documents to submit and how
              to access them.
            </p>
            <p>
              2. <strong>AI service automatically verifies documents</strong>{" "}
              and creates structured tasks only if the files meet the required
              criteria.
            </p>
            <p>
              3. <strong>Centralized task management portal</strong> provides
              consultants with a clear overview of their tasks, including status
              updates and document details, reducing the need for constant email
              checks.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
