export default function TodayWidget() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-[#2D2D2D]">
        🐴 Vandaag op stal
      </h2>

      <div className="mt-6 space-y-5">

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            🌾 Volgende voerronde
          </span>

          <span className="font-semibold">
            17:00
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            📋 Open klussen
          </span>

          <span className="font-semibold">
            4
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            🎂 Verjaardag
          </span>

          <span className="font-semibold">
            Lisa
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            🔔 Nieuwe melding
          </span>

          <span className="font-semibold">
            2
          </span>
        </div>

      </div>

    </div>
  );
}