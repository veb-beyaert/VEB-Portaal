import Image from "next/image";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = 80 }: LogoProps) {
  return (
    <Image
      src="/images/logo-veb.png"
      alt="VEB Portaal"
      width={size}
      height={size}
      priority
      className="rounded-xl shadow-sm"
    />
  );
}