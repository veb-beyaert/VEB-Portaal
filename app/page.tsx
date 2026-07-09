import HeroPanel from "@/components/auth/HeroPanel";
import LoginCard from "@/components/auth/LoginCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F4F7F4] via-white to-[#EEF5EF] p-6">

      <div className="flex min-h-[760px] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">

  <div className="w-3/5">
    <HeroPanel />
  </div>

  <div className="w-2/5">
    <LoginCard />
  </div>

</div>

    </main>
  );
}