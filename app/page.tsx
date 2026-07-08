import HeroPanel from "@/components/auth/HeroPanel";
import LoginCard from "@/components/auth/LoginCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8F6] p-6">

      <div className="flex w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        <HeroPanel />

        <LoginCard />

      </div>

    </main>
  );
}