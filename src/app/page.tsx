import { Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#F3F3F2]">
      {/* Main */}
      <section className="w-full  flex flex-col justify-center">
        <section className="flex flex-col gap-8 h-screen justify-center responsive-x-padding bg-white rounded-b-[32px] sm:rounded-b-[50px]  lg:rounded-b-[100px]">
          <h1 className="text-[32px] sm:text-[36px] lg:text-[55px] font-normal">
            hi
          </h1>
          <h1 className="text-[32px] sm:text-[36px] lg:text-[55px] font-normal">
            I'm Kevin Kao, a UX/UI designer and software engineer. I love
            turning ideas into real products.
          </h1>
          <Linkedin className="text-[55px] font-bold" />
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
        </section>
      </section>

      {/* Footer */}
    </main>
  );
}
