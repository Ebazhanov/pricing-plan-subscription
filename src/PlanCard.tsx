import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import React, { useState } from "react";

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
  const [start, setStart] = useState(false);
  const { width, height } = useWindowSize();

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
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.65792 19.316L7.34192 18L15.6849 9.658L7.34192 1.316L8.65792 0L18.3149 9.658L8.65792 19.316Z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setStart(true)}
        className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white"
      >
        {btnText}
      </button>
      {start && (
        <Confetti width={width} height={height} numberOfPieces={2000} />
      )}
    </div>
  );
}
