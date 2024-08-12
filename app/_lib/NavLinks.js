import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RiRectangleLine } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import { SiDocusaurus } from "react-icons/si";
import { MdOutlineMessage } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import { RiAdvertisementLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { GrCompliance } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
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
  {
    link: "/member",
    icon: <GrDocumentUser />,
    name: "Member",
    subLinksComponent: (
      <div className="h-[100px] w-[100px] bg-black">
        <h1>Hello</h1>
      </div>
    ),
  },
  {
    link: "/subscription",
    icon: <SiDocusaurus />,
    name: "Subscription",
  },
  {
    link: "/messages",
    icon: <MdOutlineMessage />,
    name: "Messages",
  },
  {
    link: "/coupons",
    icon: <RiCouponLine />,
    name: "Coupons",
  },
  {
    link: "/advertisement",
    icon: <RiAdvertisementLine />,
    name: "Advertisement",
  },

  {
    link: "/shippingcard",
    icon: <CiCreditCard1 />,
    name: "Shipping Card",
  },
  {
    link: "/SuggestionsAndComplaints/endUsers",
    icon: <GrCompliance />,
    name: "Suggestions and Complaints",
  },
  {
    link: "/settings",
    icon: <CiSettings />,
    name: "Settings",
  },
];
