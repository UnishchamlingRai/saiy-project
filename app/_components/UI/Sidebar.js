import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";

import NavLink from "./NavLink";
import { navLinks } from "@/app/_lib/NavLinks";
import { auth } from "@/app/_lib/auth";
export default async function Sidebar() {
  const {
    user: { user },
  } = await auth();

  return (
    <div className="hidden h-screen w-auto flex-col justify-between overflow-hidden bg-white p-2 shadow sm:flex sm:w-64 sm:p-8">
      <nav className="space-y-4">
        <div className="mb-8 flex">
          <Link href="/">
            <Image src={Logo} alt="Logo" className="w-12 sm:w-24" />
          </Link>
        </div>
        {navLinks.map((navItem) => (
          <NavLink
            key={navItem.link}
            href={navItem.link}
            icon={navItem.icon}
            name={navItem.name}
          />
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-2 sm:relative">
        <div className="flex items-center justify-start space-x-4 sm:justify-center">
          <Image
            src={`/${user?.avatar}`}
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-[14px] font-bold text-gray-700">
              {user?.user_fullname_eng}
            </p>
            <p className="text-[12px] text-gray-500">Management Level</p>
          </div>
        </div>
      </div>
    </div>
  );
}
