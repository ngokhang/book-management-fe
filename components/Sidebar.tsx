import * as React from "react";
import SidebarItem from "./SidebarItem";

interface ISidebarProps {
  listCategories: {
    _id: string;
    isPublished: boolean;
    name: string;
    description: string;
  }[];
}

const Sidebar: React.FunctionComponent<ISidebarProps> = ({
  listCategories,
}) => {
  return (
    <ul className="sidebar overflow-auto flex flex-col gap-5 w-full xl:w-[20rem] h-[50vh] overflow-y-auto px-5 py-5 border shadow-md">
      <h3 className="text-lg font-bold">Categories</h3>
      {listCategories.map((item, index) => (
        <SidebarItem
          label={item.name}
          key={`${item.name}-${index}`}
          value={item.name}
        />
      ))}
    </ul>
  );
};

export default Sidebar;
