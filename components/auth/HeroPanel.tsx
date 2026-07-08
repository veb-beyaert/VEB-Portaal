import Image from "next/image";
import { APP } from "@/lib/config";
import Logo from "@/components/shared/Logo";

export default function HeroPanel() {
  return (
    <div className="relative hidden lg:flex flex-1 overflow-hidden rounded-l-3xl">

      <Image
        src="/images/hero-stal.jpeg"
        alt="VEB Stalling"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#2E5E3B]/75" />

      <div className="relative z-10 flex h-full flex-col justify-between p-14 text-white">

        <div>
          <Logo size={90} />

          <h1 className="mt-8 text-5xl font-bold">
            {APP.name}
          </h1>

          <p className="mt-4 max-w-md text-lg text-white/90 leading-8">
            {APP.slogan}
          </p>
        </div>

        <div className="space-y-5 text-lg">

          {APP.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>

              <span>{feature}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}