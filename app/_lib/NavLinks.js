import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RiRectangleLine } from "react-icons/ri";
export const navLinks = [
  {
    link: "/",
    icon: <IoHomeOutline />,
    name: "Dashboard",
  },
  {
    link: "/city",
    icon: <IoLocationOutline />,
    name: "City",
  },
  {
    link: "/sectionControl",
    icon: <RiRectangleLine />,
    name: "Section Control",
  },
];
