import Logo from "@/components/shared/Logo";
import LoginForm from "./LoginForm";
import { APP } from "@/lib/config";

export default function LoginCard() {
  return (
    <div className="flex w-full max-w-lg flex-col justify-center rounded-r-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl p-10 ">

      <div className="mb-10 text-center">

        <div className="flex justify-center">
          <Logo size={80} />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#2D2D2D]">
          VEB-Portaal
        </h2>

        <p className="mt-2 text-gray-500">
          Log in met je VEB-account om toegang te krijgen tot het ledenportaal
        </p>

      </div>

      <LoginForm />

      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-400">

        <p>{APP.organisation}</p>

        <p className="mt-1">
          Versie {APP.version}
        </p>

      </div>

    </div>
  );
}