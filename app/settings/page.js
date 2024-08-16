import Wrapper from "../_components/UI/Wrapper";
import Head from "../_components/UI/Head";
import { FiMessageSquare, FiSlash, FiUserCheck } from "react-icons/fi";
import { IoHeadsetOutline } from "react-icons/io5";
import SettingCard from "../_components/Features/settings/SettingCard";
import { BiMessageAltDots } from "react-icons/bi";
import { HiSignal } from "react-icons/hi2";
import { IoMailOpenOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
export const metadata = {
  title: "Settings",
  description: "Settings",
};

export default function page() {
  return (
    <Wrapper>
      <Head title="Settings" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SettingCard
          href={"/settings/blocking"}
          icon={<FiSlash className="mb-4 text-4xl text-red-500" />}
          title="Blocking."
          description="Manage anyone who has been blocked from this platform"
        />
        <SettingCard
          href={"/settings/policesAndTermOfUse"}
          icon={<FiUserCheck className="mb-4 text-4xl text-primary-500" />}
          title="Policies and Terms of Use."
          description=" About the rules and policies that apply when using the application"
        />
        <SettingCard
          href={"/settings/communicatoinTools"}
          icon={<HiSignal className="mb-4 text-4xl text-success-500" />}
          title="Communication Tools"
          description="  Management of communication tools as a means of supporting
            applications"
        />
        <SettingCard
          href={"/settings/supportMessage"}
          icon={<IoHeadsetOutline className="mb-4 text-4xl text-primary-500" />}
          title="Support messages"
          description="Information regarding help messages from admins to moderators and end users"
        />
        {/* <SettingCard
          href={"/settings/messages"}
          icon={
            <IoMailOpenOutline className="mb-4 text-4xl text-warning-500" />
          }
          title="Messages between members"
          description="About providing messages from 1 member and other members"
        />
        <SettingCard
          href={"/settings/messages"}
          icon={<AiOutlineMessage className="mb-4 text-4xl text-success-500" />}
          title="Messages between members and moderators"
          description="About providing messages from members and moderators"
        /> */}
        <SettingCard
          href={"/settings/masterFAQ"}
          icon={<FaQuestionCircle className="mb-4 text-4xl text-primary-500" />}
          title="Master FAQ"
          description="Master Frequently Asked Questions for the application"
        />
        <SettingCard
          href={"/settings/masterContact"}
          icon={<IoIosContact className="mb-4 text-4xl text-success-500" />}
          title="Master Contact"
          description="Master contact information for the application"
        />
      </div>
    </Wrapper>
  );
}
