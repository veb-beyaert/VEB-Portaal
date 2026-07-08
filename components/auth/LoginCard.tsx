import Logo from "@/components/shared/Logo";
import LoginForm from "./LoginForm";
import { APP } from "@/lib/config";

export default function LoginCard() {
  return (
    <div className="flex w-full max-w-md flex-col justify-center rounded-r-3xl bg-white p-10 shadow-2xl">

      <div className="mb-10 text-center">

        <div className="flex justify-center">
          <Logo size={80} />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#2D2D2D]">
          Welkom terug
        </h2>

        <p className="mt-2 text-gray-500">
          Log in om verder te gaan
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