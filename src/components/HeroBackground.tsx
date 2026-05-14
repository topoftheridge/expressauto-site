import Image from "next/image";

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/expressdetailhero.jpg"
        alt="Express Auto Detail hero background"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative">{children}</div>
    </div>
  );
}
