import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { SiDocusaurus } from "react-icons/si";

import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Status from "@/app/_components/UI/Status";
import Row from "@/app/_components/UI/Row";

export default function Page() {
  return (
    <Wrapper>
      <Head title="Subscription" />
      <div>
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center rounded-full bg-primary-50 p-2 text-primary-400">
            <SiDocusaurus className="h-12 w-12" />
          </div>
          <div>
            <p>1000/Years</p>
            <Status status="active" />
          </div>
        </div>

        <div>
          <Row title={"Subscription Type"} value={"Monthly"} />
          <Row title={"Account Type"} value={"Pro"} />
          <Row title={"Length"} value={"3Month"} />
          <Row title={"Payment Type"} value={"Each Month"} />
          <Row title={"Price"} value={"10000"} />

          <div>
            <p className="font-bold">Benefits</p>
            <div>
              <p>Reach million of people</p>
              <p>Reach million of people</p>
              <p>Reach million of people</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
