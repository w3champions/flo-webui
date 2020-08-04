export function copyToClipboard(content: string) {
  navigator.clipboard.writeText(content);
}
