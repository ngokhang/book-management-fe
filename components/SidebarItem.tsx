import * as React from "react";

interface ISidebarItemProps {
  value: string;
  label: string;
}

const SidebarItem: React.FunctionComponent<ISidebarItemProps> = (props) => {
  return (
    <li className="flex items-center gap-3 ps-4">
      <input
        className="inline-block w-5 h-5 text-cyan-400"
        type="checkbox"
        name={props.value}
        id={props.value}
        value={props.value}
      />
      <label htmlFor={props.value} className="text-base">
        {props.label}
      </label>
    </li>
  );
};

export default SidebarItem;
