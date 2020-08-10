export function FlagIcon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      style={{
        width: 16,
        height: 16,
      }}
      src={`/flags/${id.toLowerCase()}.svg`}
    />
  );
}
