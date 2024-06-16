import Link from "next/link";
import * as React from "react";
// import DropdownMenu from "./DropdownMenu";
import dynamic from "next/dynamic";

interface INavigationMenuProps {}

const DropdownMenu = dynamic(() => import("../components/DropdownMenu"), {
  ssr: false,
});
const BookDropdownItem = [
  {
    name: "Ranking books",
    path: "/book/ranking",
  },
  {
    name: "Rent book",
    path: "/book",
  },
];

const NavigationMenu: React.FunctionComponent<INavigationMenuProps> = (
  props
) => {
  return (
    <nav className="hidden md:flex gap-4">
      <span className="group/bookDropdownMenu relative text-base text-black">
        <span>Books</span>
        <DropdownMenu itemList={BookDropdownItem} />
      </span>
      <Link href={"/support"} className="text-base text-black">
        Support
      </Link>
      <Link href={"/login"} className="text-base text-black">
        Login
      </Link>
      <Link href={"/register"} className="text-base text-black">
        Register
      </Link>
    </nav>
  );
};

export default NavigationMenu;
