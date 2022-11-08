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
    </div>
  );
}
