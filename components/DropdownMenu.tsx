"use client";

import React from "react";
import DropdownMenuItem from "./DropdownMenuItem";

interface IDropdownMenuProps {
  width?: string | undefined;
  itemList: { name: string; path: string }[];
}

const DropdownMenu: React.FC<IDropdownMenuProps> = ({ itemList, width }) => {
  return (
    <ul
      className={`hidden group-hover/bookDropdownMenu:block absolute left-0 w-[${
        width || "150px"
      }] border rounded shadow-md`}
      role="menu"
      aria-orientation="vertical"
    >
      {itemList.map((item) => (
        <DropdownMenuItem
          name={item.name}
          path={item.path}
          key={`dropdown-menu-item-${item.name}`}
        />
      ))}
    </ul>
  );
};

export default DropdownMenu;
