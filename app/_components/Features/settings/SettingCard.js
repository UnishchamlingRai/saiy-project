import Link from "next/link";
import React from "react";

const SettingCard = ({ icon, title, description, href }) => {
  return (
    <Link
      href={href}
      className="flex max-w-sm flex-col items-start rounded-lg bg-white p-6 text-center shadow hover:bg-gray-200"
    >
      {icon}
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="text-start text-gray-500">{description}</p>
    </Link>
  );
};

export default SettingCard;
