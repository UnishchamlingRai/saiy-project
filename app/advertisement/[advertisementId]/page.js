import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Row from "@/app/_components/UI/Row";

export default function Page() {
  return (
    <Wrapper>
      <Head title={"Advertisement - Detail"} />
      <div className="flex gap-4 rounded-lg border border-gray-300 p-4">
        <div className="flex-1 space-y-4">
          <div>
            <Row title={"Advertisement Name"} value={"Cheap Car Ads"} />
            <Row title={"Type"} value={"Pop Up Screen"} />
            <Row
              title={"Description"}
              bold={false}
              value={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
              }
            />
            <Row
              bold={false}
              title={"Link"}
              value={"https://app.lottiefiles.com/preview?fileUrl="}
            />
            <Row
              bold={false}
              title={"Advertising Targets"}
              value={"End User"}
            />
            <Row bold={false} title={"Duration"} value={"5 second"} />
            <Row bold={false} title={"Country"} value={"Nepal"} />
          </div>
        </div>
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
          <div>Image</div>
        </div>
      </div>
    </Wrapper>
  );
}
