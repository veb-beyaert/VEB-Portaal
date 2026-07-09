export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-10">

      <div>

        <h1 className="text-3xl font-bold text-[#2D2D2D]">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welkom terug bij VEB Portaal.
        </p>

      </div>

      <div className="flex items-center gap-5">

        <button className="rounded-xl bg-[#F4F7F4] p-3 transition hover:bg-[#E8EFE8]">
          🔔
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-[#F4F7F4] px-4 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E5E3B] text-white font-bold">
            G
          </div>

          <div>

            <p className="font-semibold">
              Gwyneth
            </p>

            <p className="text-xs text-gray-500">
              Bestuurslid
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}