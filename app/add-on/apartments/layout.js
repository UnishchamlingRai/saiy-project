import AddonsSideBar from "@/app/_components/Features/Add-on/Add-onsSideBar";
import Wrapper from "@/app/_components/UI/Wrapper";

export default function Layout({ children }) {
  const navLinks = [
    {
      title: "Main Features",
      href: "/add-on/apartments",
      discription: "Add a brand to your car brand",
    },
    {
      title: "Nearby Places",
      href: "/add-on/apartments/nearbyPlaces",
      discription: "Add a Model to your car",
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
