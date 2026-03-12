export default function SectionGrid({
  opacity = 'opacity-[0.02]',
}: {
  opacity?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 hidden dark:block ${opacity} [background-image:linear-gradient(var(--color-primary)_1px,transparent_1px),linear-gradient(90deg,var(--color-primary)_1px,transparent_1px)] [background-size:80px_80px]`}
    />
  );
}