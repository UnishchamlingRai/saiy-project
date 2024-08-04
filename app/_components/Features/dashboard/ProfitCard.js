import Link from "next/link";
import ProfitChart from "./ProfitChart";

export default function ProfitCard({
  title,
  date,
  value,
  percentage,
  link,
  sampleData,
}) {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-gray-100 p-4 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">{title}</h2>
        <Link href={link}>
          <span className="cursor-pointer text-sm text-blue-500">
            See All &gt;
          </span>
        </Link>
      </div>
      <div className="flex h-[150px] flex-col justify-between md:flex-row">
        <div className="mb-4 items-start justify-between">
          <div className="mb-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
            {date}
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold">{value}</p>
            <p className={`rounded bg-success-50 px-2 text-sm text-green-400`}>
              {percentage}%
            </p>
          </div>
        </div>
        <div className="flex-1">
          <ProfitChart sampleData={sampleData} />
        </div>
      </div>
    </div>
  );
}
