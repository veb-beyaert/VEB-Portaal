type StatCardProps = {
  icon: string;
  title: string;
  value: string | number;
};

export default function StatCard({
  icon,
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F7F4] text-2xl">
        {icon}
      </div>

      <p className="text-4xl font-bold text-[#2E5E3B]">
        {value}
      </p>

      <p className="mt-2 text-gray-500">
        {title}
      </p>

    </div>
  );
}
