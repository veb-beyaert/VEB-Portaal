const activities = [
  {
    time: "08:15",
    text: "Gwyneth registreerde de ochtendvoerbeurt.",
  },
  {
    time: "09:30",
    text: "Nieuwe klus toegevoegd: Mestkar legen.",
  },
  {
    time: "10:05",
    text: "Mededeling geplaatst over de buitenbak.",
  },
  {
    time: "11:20",
    text: "Nieuw lid toegevoegd aan de vereniging.",
  },
];

export default function ActivityWidget() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#2D2D2D]">
        Laatste activiteiten
      </h2>

      <div className="mt-6 space-y-5">
        {activities.map((activity) => (
          <div
            key={`${activity.time}-${activity.text}`}
            className="border-l-2 border-[#74A96C] pl-4"
          >
            <p className="text-sm text-gray-400">{activity.time}</p>

            <p className="mt-1 text-gray-700">
              {activity.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}