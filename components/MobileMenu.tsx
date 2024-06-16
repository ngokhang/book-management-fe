"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";

interface IMobileMenuProps {
  showDrawer: boolean;
  clickShowDrawer: () => void;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({
  showDrawer,
  clickShowDrawer,
}) => {
  return (
    <nav className="flex justify-between items-center">
      <button onClick={clickShowDrawer}>
        <IoMdMenu size={40} className="pt-1" />
      </button>
      <Logo />
      <span className="w-[40px]"></span>
    </nav>
  );
};

export default MobileMenu;
