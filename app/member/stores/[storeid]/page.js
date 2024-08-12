import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Row from "@/app/_components/UI/Row";
import Profile from "@/app/_components/Features/Member/Profile";

export default async function Page({ params }) {
  return (
    <Wrapper>
      <Head title="Detail Store" />
      <div className="rounded-lg border border-gray-300 p-4">
        <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-100 p-4">
          <Profile />
        </div>

        <div className="flex gap-4 rounded-lg border border-gray-300 p-4">
          <div className="flex-1 space-y-4">
            <div>
              <Row
                title={"Stores Name (English Version)"}
                value={"Selling Cars"}
              />
              <Row
                title={"Stores Name (ِArabic Version)"}
                value={"بيع سيارة"}
              />
              <Row title={"Owner Name"} value={"Ammar Zoni"} />
              <Row title={"Main Category"} value={"Car Shop"} />
              <Row title={"Sub Category"} value={"Sub Category 1"} />
              <Row title={"City"} value={"Gaighat"} />
              <Row
                title={"Store Address (on maps)"}
                value={"Jalan Ibn Thamrin"}
              />
            </div>
            <div>
              <div className="ml-3 flex items-center gap-1 pt-4">
                <input type="checkbox" />
                <span>
                  Attach supporting documents such as owner's identification,
                  professional license, or tax number?
                </span>
              </div>
              <Row
                title={"Number of Owner ID"}
                value={"827817387218372138712"}
              />
              <Row title={"Tax Number"} value={"827817387218372138712"} />
            </div>
          </div>
          <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
            <div>Image</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
