import AppLayout from "@/components/layout/AppLayout";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { supabase } from "@/lib/supabase";
import { Horse } from "@/lib/types";
import FeedSession from "@/components/voeren/FeedSession";

export default async function VoerenPage() {
    const { data: horses, error } = await supabase
  .from("horses")
  .select("*")
  .eq("active", true)
  .order("yard")
  .order("stable_number");

console.log("Horses:", horses);
console.log("Error:", error);

if (error) {
  throw new Error(error.message);
}

const plein1 =
  horses?.filter((horse: Horse) => horse.yard === 1) ?? [];

const plein2 =
  horses?.filter((horse: Horse) => horse.yard === 2) ?? [];

const plein3 =
  horses?.filter((horse: Horse) => horse.yard === 3) ?? [];

  return (
    <AppLayout sidebar={<Sidebar />}>

      <Topbar />

      <div className="mt-8">

        <h2 className="text-4xl font-bold text-[#2D2D2D]">
          🌾 Voeren
        </h2>

        <p className="mt-2 text-gray-500">
          Registreer eenvoudig iedere voerronde.
        </p>

       <FeedSession
  plein1={plein1}
  plein2={plein2}
  plein3={plein3}
/>

</div>

    </AppLayout>
  );
}