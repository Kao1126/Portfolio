"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";

export default function UseCaseContainer({
  imgSrc,
  title,
  description,
  linkSrc,
  roles,
}: {
  imgSrc: string;
  title: string;
  description: string;
  linkSrc: string;
  roles: string[];
}) {
  const route = useRouter();
  const handleCliclk = () => {
    route.push(linkSrc);
  };
  return (
    <section className="bg-white flex min-h-fit h-full w-full sm:w-1/2 flex-col gap-8 rounded-2xl p-8">
      <img src={imgSrc} className="rounded-2xl h-96 " />

      <div className="flex flex-col gap-4">
        <h3 className="section-responsive-title">{title}</h3>
        <p className="section-responsive-description">{description}</p>
      </div>
      <div className="flex gap-4 flex-row">
        {roles.map((item, index) => (
          <Badge
            key={index}
            variant={"outline"}
            className="text-[12px] sm:text-[16px] font-norma"
          >
            {item}
          </Badge>
        ))}
      </div>

      {/* Button */}
      <Button className="cursor-pointer" onClick={handleCliclk}>
        {" "}
        Read more
      </Button>
    </section>
  );
}
