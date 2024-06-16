"use client";

import * as React from "react";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "./MobileMenu";
import Drawer from "./Drawer";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 769px)" });
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  const clickShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  React.useEffect(() => {
    setIsMobile(isTabletOrMobile);
  }, [isTabletOrMobile]);

  return (
    <header>
      {!isMobile && (
        <div className="hidden md:flex justify-between items-center py-2">
          <Logo />
          <SearchBar />
          <NavigationMenu />
        </div>
      )}
      {isMobile && (
        <MobileMenu showDrawer={showDrawer} clickShowDrawer={clickShowDrawer} />
      )}
      <Drawer show={showDrawer} closeDrawer={clickShowDrawer} />
    </header>
  );
};

export default Header;
