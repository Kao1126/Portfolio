export function TitleDescriptionBlock({
  title,
  description,
  sectionClassName,
}: {
  title: string;
  description: string;
  sectionClassName?: string;
}) {
  return (
    <section
      className={`bg-white h-fit ${
        sectionClassName ? sectionClassName : "pt-16"
      }`}
    >
      <div className="flex flex-col gap-10 h-fit justify-start">
        <h1 className="section-responsive-title  font-medium">{title}</h1>
        <p className="section-responsive-description ">{description}</p>
      </div>
    </section>
  );
}

export function TitleBulletPointBlock({
  title,
  points,
  isPaddingTop = true,
}: {
  title: string;
  points: string[];
  isPaddingTop?: boolean;
}) {
  return (
    <section className={`bg-white ${isPaddingTop ? "pt-16" : ""}`}>
      <div className="flex flex-col gap-10 h-fit justify-start">
        <h1 className="section-responsive-title font-medium">{title}</h1>
        <ul className="flex gap-3.5 flex-col h-fit w-full">
          {points.map((item, index) => (
            <li key={index}>
              <h2 className="section-responsive-description">
                {index + 1 + ". " + item}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TitleImageBlock({
  title,
  description,
  imgSrc,
  halfWidth = false,
}: {
  title: string;
  description: string;
  imgSrc: string;
  halfWidth?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 h-fit section-responsive-description text-center items-center justify-center italics ${
        halfWidth ? "w-1/2" : "w-full"
      }`}
    >
      <img
        src={imgSrc}
        className={`rounded-2xl h-auto object-cover ${"w-full"}`}
      />
      <p className="italic text-gray-500">
        <strong>{title}</strong>: {description}
      </p>
    </div>
  );
}
