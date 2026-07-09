import AppLayout from "@/components/layout/AppLayout";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import StatCard from "@/components/dashboard/StatCard";

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

    </AppLayout>
  );
}