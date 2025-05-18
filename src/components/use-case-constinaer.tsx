import { Button } from "./ui/button";

export default function UseCaseContainer({
  imgSrc,
  title,
  description,
  linkSrc,
}: {
  imgSrc: string;
  title: string;
  description: string;
  linkSrc: string;
}) {
  return (
    <section className="bg-white flex min-h-fit h-full w-full flex-col gap-8 rounded-2xl p-8">
      <img src={imgSrc} className="rounded-2xl h-96" />

      <div className="flex flex-col gap-4">
        <h3 className="text-[20px] sm:text-[24px] lg:text-[30px]">{title}</h3>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
          {description}
        </p>
      </div>
      <Button> Read more</Button>
    </section>
  );
}
