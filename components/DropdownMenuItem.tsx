"use client";

import Link from "next/link";
import React from "react";

interface IDropdownMenuItemProps {
  name: string;
  path?: string | undefined;
}

const DropdownMenuItem: React.FC<IDropdownMenuItemProps> = ({ name, path }) => {
  return (
    <li className=" hover:bg-slate-400 hover:text-white transition-colors">
      <Link href={path || "#"} className="block w-full h-full p-2">
        {name}
      </Link>
    </li>
  );
};

export default DropdownMenuItem;
