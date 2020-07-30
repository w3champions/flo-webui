export interface MapList {
  root: MapEntry;
}

export interface MapEntry {
  name: string;
  children: MapEntry[];
}
