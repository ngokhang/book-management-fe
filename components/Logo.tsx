import Link from "next/link";
import * as React from "react";

interface ILogoProps {}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
    <Link
      href={"/"}
      className="inline-block text-3xl md:text-4xl text-black font-bold"
    >
      <h1>
        <span className="text-cyan-600">Li</span>b
        <span className="text-cyan-600">Sy</span>s
      </h1>
    </Link>
  );
};

export default Logo;
