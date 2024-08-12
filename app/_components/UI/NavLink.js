"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
// import { useRouter } from "next/router";

export default function NavLink({ href, icon, name }) {
  const [isOpenMember, setIsOpenMember] = useState(false);
  const pathName = usePathname();

  const isActive = `/${pathName.split("/")[1]}` === href;
  const isActiveMember = `/${pathName.split("/")[2]}`;
  // console.log("pathName:", pathName.split("/"));
  // console.log("pathName:", pathName.split("/")[1]);

  if (href === "/SuggestionsAndComplaints/endUsers") {
    return (
      <div className="flex flex-col gap-2">
        <div
          className={`flex cursor-pointer items-center justify-center rounded p-1 px-4 font-bold sm:justify-start ${
            isActive
              ? "bg-gray-200 text-primary-500"
              : "text-gray-900 hover:bg-gray-200"
          }`}
        >
          <div
            className="relative flex w-full items-center justify-between"
            onClick={() => setIsOpenMember(!isOpenMember)}
          >
            <div className="flex items-center space-x-2">
              {icon}
              <span className="ml-2 hidden sm:block">{name}</span>
              <div className="absolute left-0 hidden rounded bg-black p-1 text-xs text-white group-hover:block sm:hidden">
                {name}
              </div>
            </div>
            <span>
              <RiArrowRightWideLine width={16} />
            </span>
          </div>
        </div>
        {isOpenMember && (
          <div className="ml-5 flex flex-col border-l-2 border-primary-200 pl-5">
            <Link
              key={"end-user"}
              prefetch={true}
              className={`p-2 ${pathName === "/SuggestionsAndComplaints/endUsers" && "font-bold text-primary-500"}`}
              href="/SuggestionsAndComplaints/endUsers"
            >
              End User
            </Link>
            <Link
              key={"stores"}
              prefetch={true}
              className={`p-2 ${pathName === "/SuggestionsAndComplaints/stores" && "font-bold text-primary-500"}`}
              href="/SuggestionsAndComplaints/stores"
            >
              Store
            </Link>
          </div>
        )}
      </div>
    );
  }
  if (href === "/member") {
    return (
      <div className="flex flex-col gap-2">
        <div
          className={`flex cursor-pointer items-center justify-center rounded p-1 px-4 font-bold sm:justify-start ${
            isActive
              ? "bg-gray-200 text-primary-500"
              : "text-gray-900 hover:bg-gray-200"
          }`}
        >
          <div
            className="relative flex w-full items-center justify-between"
            onClick={() => setIsOpenMember(!isOpenMember)}
          >
            <div className="flex items-center space-x-2">
              {icon}
              <span className="ml-2 hidden sm:block">{name}</span>
              <div className="absolute left-0 hidden rounded bg-black p-1 text-xs text-white group-hover:block sm:hidden">
                {name}
              </div>
            </div>
            <span>
              <RiArrowRightWideLine width={16} />
            </span>
          </div>
        </div>
        {isOpenMember && (
          <div className="ml-5 flex flex-col border-l-2 border-primary-200 pl-5">
            <Link
              key={"end-user"}
              prefetch={true}
              className={`p-2 ${pathName === "/member" && "font-bold text-primary-500"}`}
              href="/member"
            >
              End User
            </Link>
            <Link
              key={"stores"}
              prefetch={true}
              className={`p-2 ${pathName === "/member/stores" && "font-bold text-primary-500"}`}
              href="/member/stores"
            >
              Store
            </Link>
            <Link
              key={"adminstration"}
              prefetch={true}
              className={`p-2 ${pathName === "/member/adminstration" && "font-bold text-primary-500"}`}
              href="/member/adminstration"
            >
              Adminstration
            </Link>
          </div>
        )}
      </div>
    );
  }
  return (
    <Link
      prefetch={true}
      key={href}
      href={href}
      className={`flex items-center justify-center rounded p-1 px-4 font-bold sm:justify-start ${
        isActive
          ? "bg-gray-200 text-primary-500"
          : "text-gray-900 hover:bg-gray-200"
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
