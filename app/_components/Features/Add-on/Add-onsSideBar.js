"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AddonsSideBar = ({ navLinks }) => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className="flex flex-col gap-2">
      {navLinks.map((navLink, index) => {
        const isActive = `${pathname}` === `${navLink.href}`;
        return (
          <Link href={navLink.href} key={index}>
            <div
              className={`rounded-md p-2 shadow hover:bg-gray-200 ${isActive ? "bg-primary-50 text-primary-500" : ""}`}
            >
              <h1 className="font-bold">{navLink.title}</h1>
              <p className="text-xs text-gray-700">{navLink.discription}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AddonsSideBar;
