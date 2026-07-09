"use client";

type FeedRoundSelectorProps = {
  selectedDate: string;
  selectedRound: string;
  onDateChange: (date: string) => void;
  onRoundChange: (round: string) => void;
};

const rounds = ["07:00", "12:00", "17:00", "22:00"];

export default function FeedRoundSelector({
  selectedDate,
  selectedRound,
  onDateChange,
  onRoundChange,
}: FeedRoundSelectorProps) {
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div>
        <h2 className="text-xl font-bold">
          Voerronde
        </h2>

        <p className="text-gray-500">
          Kies de datum en voerronde.
        </p>
      </div>

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium">
          Datum
        </label>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3"
        />

      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">

        {rounds.map((round) => (
          <button
            key={round}
            onClick={() => onRoundChange(round)}
            className={`rounded-xl p-4 font-semibold transition ${
              selectedRound === round
                ? "bg-[#2E5E3B] text-white"
                : "border border-gray-300 bg-white hover:border-[#2E5E3B]"
            }`}
          >
            {round}
          </button>
        ))}

      </div>

    </div>
  );
}