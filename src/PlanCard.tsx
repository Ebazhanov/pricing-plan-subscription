interface PlanCardProps {
  name: string;
  description: string;
  btnText?: string;
  price?: string;
  features: string[];
  color?: string;
}

export default function PlanCard({
  name,
  description,
  btnText,
  price,
  features,
  color,
}: PlanCardProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8"
    >
      <h2 className="mb-5 text-xl font-medium">{name}</h2>
      <div className="mb-5 flex items-end text-6xl font-black">
        {price ? <div>${price}</div> : "Free"}
      </div>
      <p className="mb-5">{description}</p>
      <ul className="mb-10 flex flex-col gap-y">
        {features.map((feature) => (
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M56.1 3.294l-6.874 15.832c2.05.889 3.957 2.073 5.663 3.515L66.037 9.468a40.12 40.12 0 00-9.936-6.174z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
