import React from "react";

export default function Row({ title, value, bold = true }) {
  return (
    <div className="flex justify-between border-b border-gray-200 p-3">
      <h3 className="font-semibold">{title}</h3>
      <p className={`${bold ? "font-bold" : "font-normal"} w-2/4 text-end`}>
        {value}
      </p>
    </div>
  );
}
