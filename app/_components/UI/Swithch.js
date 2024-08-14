"use client";
export default function Switch({ onClick, isActive }) {
  return (
    <div className="flex items-center gap-2">
      <div
        onClick={onClick}
        className={`flex h-4 w-[50px] items-center rounded-3xl ${!isActive ? "bg-gray-500" : "bg-primary-500"} px-1 py-3 ${!isActive ? "" : "justify-end"}`}
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-3xl bg-gray-200"></div>
      </div>
      <p className="font-bold">{isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}
