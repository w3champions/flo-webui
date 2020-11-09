import { Tooltip } from "@blueprintjs/core";
import { PingStats } from "../types/ping";

export interface PingValueProps {
  value: PingStats | null;
}

export default function PingValue({ value }: PingValueProps) {
  const text = !value || (value && value.avg === null) ? '-' : `${value.avg}ms`;
  return <Tooltip content={<div>
    Min: {value && value.min}<br />
    Max: {value && value.max}<br />
    Avg: {value && value.avg}<br />
    Loss Rate: {value && value.loss_rate}<br />
  </div>}><span className={getPingClass(value && value.avg)}>{text}</span></Tooltip>;
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
