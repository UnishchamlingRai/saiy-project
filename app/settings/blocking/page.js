import Wrapper from "@/app/_components/UI/Wrapper";
import Head from "@/app/_components/UI/Head";
import Table from "@/app/_components/UI/Table";
import Icons from "@/app/_components/UI/Icons";
import Button from "@/app/_components/UI/Button";
import SearchInput from "@/app/_components/UI/SearchInput";

export const metadata = {
  title: "Settings - Blocking",
  description: "Settings - Blocking",
};

export default function Page() {
  const stores = [
    {
      id: 1,
      name: "store1",
    },
  ];
  return (
    <Wrapper>
      <Head title="Settings - Blocking" />
      <SearchInput />
      <div className="mt-2">
        <Table
          tableHeaders={["User ID", "Name", "Email", "Phone Number", "Action"]}
        >
          {stores.map((index) => {
            return (
              <tr className="hover:bg-gray-50" key={index}>
                <td className="border-b px-4 py-2">{"User-AJAHAN"}</td>
                <td className="border-b px-4 py-2">{"Nurul Fauziyah"}</td>
                <td className="border-b px-4 py-2">{"HkEjH@example.com"}</td>
                <td className="border-b px-4 py-2">{"+628123456789"}</td>
                <td className="flex space-x-2 border-b px-4 py-2">
                  <Button variant="secondary">Unblock</Button>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </Wrapper>
  );
}
