type QuickActionCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function QuickActionCard({
  icon,
  title,
  description,
}: QuickActionCardProps) {
  return (
    <button
      className="
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        text-left
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:border-[#74A96C]
      "
    >
      <div className="mb-5 text-4xl">{icon}</div>

      <h3 className="text-xl font-semibold text-[#2D2D2D]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </button>
  );
}