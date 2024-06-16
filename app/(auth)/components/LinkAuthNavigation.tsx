import Link from "next/link";
import * as React from "react";

interface ILinkAuthNavigationProps {
  hrefTo: string;
  text: string;
  icon?: React.ReactNode;
}

const LinkAuthNavigation: React.FunctionComponent<ILinkAuthNavigationProps> = ({
  hrefTo,
  text,
  icon,
}) => {
  return (
    <Link
      href={hrefTo}
      className="flex items-center text-center w-[full] py-2 px-4 text-base border rounded border-black bg-slate-500 text-white hover:bg-slate-400 hover:text-white transition-colors"
    >
      {icon && <div className="w-[30%]">{icon}</div>}
      <span className="mr-auto">{text}</span>
    </Link>
  );
};

export default LinkAuthNavigation;
