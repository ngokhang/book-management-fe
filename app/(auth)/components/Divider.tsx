import * as React from "react";

interface IDividerProps {
  text: string;
}

const Divider: React.FunctionComponent<IDividerProps> = ({ text }) => {
  return (
    <div className="w-full my-4 text-sm text-stone-500 flex justify-center items-center">
      <span className="flex w-full justify-center items-center bg-white after:block after:h-[1px] after:w-full after:bg-stone-500 before:block before:h-[1px] before:w-full before:bg-stone-500">
        <span className="bg-white px-3">{text}</span>
      </span>
    </div>
  );
};

export default Divider;
