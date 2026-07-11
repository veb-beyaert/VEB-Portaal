"use client";

type Box = {
  id: number;
  number: number;
  horse: string;
};

type YardSectionClientProps = {
  title: string;
  boxes: Box[];
  fedBoxes: number[];
  onToggleBox: (boxNumber: number) => void;
};

export default function YardSectionClient({
  title,
  boxes,
  fedBoxes,
  onToggleBox
}: YardSectionClientProps) {


  const fedCount = fedBoxes.length;
  const progress =
    boxes.length === 0 ? 0 : (fedCount / boxes.length) * 100;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-gray-500">
            {fedCount} van {boxes.length} boxen gevoerd
          </p>
        </div>

        <span className="text-3xl">🌾</span>

      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-[#2E5E3B]"
          style={{ width: `${progress}%` }}
        />

      </div>

      <div className="mt-6 space-y-3">

        {boxes.map((box) => {

          const fed = fedBoxes.includes(box.id);

          return (
            <button
              key={box.number}
              onClick={() => onToggleBox(box.id)}
              className={`flex w-full items-center justify-between rounded-xl border p-4 transition-all ${
                fed
                  ? "border-green-300 bg-green-50"
                  : "border-gray-200 hover:border-[#74A96C]"
              }`}
            >
              <div>

                <p className="font-semibold">
                  Box {box.number}
                </p>

                <p className="text-sm text-gray-500">
                  🐴 {box.horse}
                </p>

              </div>

              <div className="text-2xl">
                {fed ? "✅" : "⬜"}
              </div>

            </button>
          );
        })}

      </div>

    </div>
  );
}