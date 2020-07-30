export function getUint8ArrayFromHexString(value: string): Uint8Array {
  return Uint8Array.from(Buffer.from(value, "hex"));
}
