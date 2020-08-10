export interface PingValueProps {
  value: number | null;
}

export default function PingValue({ value }: PingValueProps) {
  const text = typeof value === "number" ? `${value}ms` : "N/A";

  return <span className={getPingClass(value)}>{text}</span>;
}

function getPingClass(value: number | null) {
  if (value === null) {
    return "text-gray-300";
  }
  if (value < 150) {
    return "text-green-500";
  }
  if (value < 250) {
    return "text-orange-500";
  }
  return "text-red-500";
}
