export default function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-primary-dark)_0%,_transparent_50%)] opacity-10" />
      <div className="relative">{children}</div>
    </div>
  );
}
