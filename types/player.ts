export enum PlayerSource {
  Test = 0,
  BNet = 1,
}

export interface PlayerRef {
  id: number;
  name: string;
  source: PlayerSource;
}
