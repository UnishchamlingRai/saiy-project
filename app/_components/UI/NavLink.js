"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

export default function NavLink({ href, icon, name }) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`flex items-center justify-center rounded p-1 sm:justify-start ${
        isActive
          ? "bg-gray-200 text-gray-900"
          : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      <div className="relative flex items-center">
        {icon}
        <span className="ml-2 hidden sm:block">{name}</span>
        <div className="absolute left-0 hidden rounded bg-black p-1 text-xs text-white group-hover:block sm:hidden">
          {name}
        </div>
      </div>
    </Link>
  );
}
