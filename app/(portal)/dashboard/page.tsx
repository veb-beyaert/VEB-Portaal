import AppLayout from "@/components/layout/AppLayout";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import QuickActionCard from "@/components/dashboard/QuickActionCard";
import TodayWidget from "@/components/dashboard/widgets/TodayWidget";
import ActivityWidget from "@/components/dashboard/widgets/ActivityWidget";

export default function DashboardPage() {
  return (
    <AppLayout sidebar={<Sidebar />}>

      <Topbar />

      <div className="mt-8">

        <h2 className="text-4xl font-bold text-[#2D2D2D]">
          Goedemiddag Gwyneth 👋
        </h2>

        <p className="mt-2 text-gray-500">
          Welkom terug bij VEB Portaal.
        </p>

      </div>

      <div className="mt-10 grid grid-cols-4 gap-6">

        <StatCard
          icon="🐴"
          title="Paarden aanwezig"
          value={18}
        />

        <StatCard
          icon="📋"
          title="Open klussen"
          value={4}
        />

        <StatCard
          icon="🔔"
          title="Nieuwe meldingen"
          value={2}
        />

        <StatCard
          icon="🎂"
          title="Verjaardagen"
          value={1}
        />

      </div>

    <div className="mt-12 grid grid-cols-3 gap-6">

  <div className="col-span-2">
    <h2 className="mb-6 text-2xl font-bold">
      Snelle acties
    </h2>

    <div className="grid grid-cols-2 gap-6">

      <QuickActionCard
        icon="🌾"
        title="Voeren registreren"
        description="Registreer eenvoudig een voerronde."
      />

      <QuickActionCard
        icon="📋"
        title="Nieuwe klus"
        description="Voeg een klus toe aan de gezamenlijke lijst."
      />

      <QuickActionCard
        icon="🐴"
        title="Paarden"
        description="Bekijk alle paarden op stal."
      />

      <QuickActionCard
        icon="📅"
        title="Agenda"
        description="Bekijk de komende activiteiten."
      />

    </div>
  </div>

  <div className="mt-6 grid grid-cols-3 gap-6">

  <div className="col-span-2">
    <ActivityWidget />
  </div>

  <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6">
    <h2 className="text-2xl font-bold">
      Mededelingen
    </h2>

    <p className="mt-4 text-gray-500">
      Binnenkort zichtbaar...
    </p>
  </div>

</div>

  <TodayWidget />

</div>

    </AppLayout>
  );
  
}