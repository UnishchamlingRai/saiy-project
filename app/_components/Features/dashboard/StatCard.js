export default function StatCard({ title, value, icon }) {
  return (
    <div className="flex w-full max-w-xs items-center justify-between rounded-lg bg-white p-4 shadow-sm sm:max-w-none">
      <div className="space-y-4">
        <h2 className="text-md font-medium text-gray-900">{title}</h2>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="flex-shrink-0 rounded-full bg-custom-gradient p-4 text-white">
        {icon}
      </div>
    </div>
  );
}
