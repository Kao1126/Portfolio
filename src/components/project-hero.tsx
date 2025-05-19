export default function ProjectHero({
  title,
  description,
  role,
  responsibility,
  company,
}: {
  title: string;
  description: string;
  role: string;
  responsibility: string;
  company: string;
}) {
  const renderCard = [
    {
      title: "Role",
      content: role,
    },
    {
      title: "Responsibility",
      content: responsibility,
    },
    {
      title: "Company",
      content: company,
    },
  ];
  return (
    <section className="py-16 bg-[#F9F9F9] responsive-x-padding rounded-b-[32px] sm:rounded-b-[50px]  lg:rounded-b-[100px] h-fit">
      <div className="flex flex-col gap-10 h-fit justify-start items-center sm:items-start">
        <h1 className="text-[32px] sm:text-[36px] lg:text-[55px] font-normal text-center sm:text-left">
          {title}
        </h1>
        <p className="responsive-description">{description}</p>

        <ul className="flex gap-3.5 flex-col sm:flex-row h-fit w-full">
          {renderCard.map((item, index) => (
            <li
              key={index}
              className=" border-1 rounded-2xl border-solid border-[#EBEBEB] w-full h-24 p-5 gap-2.5 flex flex-col justify-center"
            >
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
