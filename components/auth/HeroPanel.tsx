import { APP } from "@/lib/config";
import Logo from "@/components/shared/Logo";

export default function HeroPanel() {
  return (
    <div className="hidden lg:flex w-full h-full flex-col justify-between rounded-l-3xl bg-gradient-to-br from-[#F7F8F6] via-white to-[#EEF5EF] p-14">

      <div>

        <Logo size={90} />

        <h1 className="mt-8 text-5xl font-bold text-[#2E5E3B]">
          {APP.name}
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-[#74A96C]" />

        <p className="mt-5 max-w-md text-lg leading-8 text-gray-600">
          Het complete digitale hart van de vereniging
        </p>

      </div>

      <div>

        <h2 className="text-3xl font-semibold text-[#2D2D2D]">
          Welkom terug!
        </h2>

        <p className="mt-4 max-w-md leading-7 text-gray-600">
          Log in om toegang te krijgen tot het VEB Portaal en eenvoudig
          gebruik te maken van alle verenigingsfuncties.
        </p>

        <div className="mt-10 space-y-5">

          {[
            "Voeren registreren",
            "Kluslijst bekijken",
            "Meldingen ontvangen",
            "Mededelingen lezen",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2E5E3B] text-white">
                ✓
              </div>

              <span className="text-lg text-gray-700">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>

      <p className="text-sm text-gray-500">
        Samen bouwen aan een sterke vereniging.
      </p>

    </div>
  );
}