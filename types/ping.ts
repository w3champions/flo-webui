export interface PingStats {
  min: number | null,
  max: number | null,
  avg: number | null,
  current: number | null,
  loss_rate: number,
}