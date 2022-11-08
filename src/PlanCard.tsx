interface PlanCardProps {
  name: string;
  description: string;
  btnText?: string;
  price?: string;
  features: string[];
  color: string;
}

export default function PlanCard({
  name,
  description,
  btnText,
  price,
  features,
  color,
}: PlanCardProps) {
  return <div className="flex min-h-[428px] "></div>;
}
