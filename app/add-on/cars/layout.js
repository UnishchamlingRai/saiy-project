import AddonsSideBar from "@/app/_components/Features/Add-on/Add-onsSideBar";
import Wrapper from "@/app/_components/UI/Wrapper";

export default function Layout({ children }) {
  const navLinks = [
    {
      title: "Brands",
      href: "/add-on/cars",
      discription: "Add a brand to your car brand",
    },
    {
      title: "Models",
      href: "/add-on/cars/models",
      discription: "Add a Model to your car",
    },
    {
      title: "Exterior",
      href: "/add-on/cars/exterior",
      discription: "Manage your car's exterior content data",
    },
    {
      title: "Accessories",
      href: "/add-on/cars/accessories",
      discription: "Manage your car accessories content data",
    },
  ];
  return (
    <Wrapper>
      <div className="grid grid-cols-[18rem_1fr] gap-4">
        <div className="mt-28">
          <AddonsSideBar navLinks={navLinks} />
        </div>
        {children}
      </div>
    </Wrapper>
  );
}
