import Logo from "@/components/shared/Logo";

const menuItems = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "👥", label: "Leden" },
  { icon: "🐴", label: "Paarden" },
  { icon: "🌾", label: "Voeren" },
  { icon: "📋", label: "Kluslijst" },
  { icon: "📅", label: "Agenda" },
  { icon: "🔔", label: "Meldingen" },
  { icon: "📢", label: "Mededelingen" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">

      <div className="border-b p-8">

        <Logo size={60} />

        <h2 className="mt-4 text-2xl font-bold text-[#2E5E3B]">
          VEB Portaal
        </h2>

      </div>

      <nav className="flex-1 p-4">

        {menuItems.map((item) => (
          <button
            key={item.label}
            className="mb-2 flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition-all hover:bg-[#F4F7F4]"
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.label}</span>
          </button>
        ))}

      </nav>

      <div className="border-t p-5">

        <p className="font-semibold">
          Gwyneth
        </p>

        <p className="text-sm text-gray-500">
          Bestuurslid
        </p>

      </div>

    </aside>
  );
}