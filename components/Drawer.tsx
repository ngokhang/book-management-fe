import * as React from "react";
import { MdClose } from "react-icons/md";

interface IDrawerProps {
  show: boolean;
  closeDrawer: () => void;
}

const Drawer: React.FunctionComponent<IDrawerProps> = ({
  show,
  closeDrawer,
}) => {
  return (
    <>
      {show && (
        <div className="md:hidden z-10 absolute top-0 left-0 w-full h-full p-4 bg-white shadow-lg">
          <div className="flex justify-between items-center drawer-title text-base">
            <div>
              <span className="text-cyan-600">Li</span>b
              <span className="text-cyan-600">Sy</span>s
            </div>
            <button onClick={closeDrawer}>
              <MdClose size={24} className="pt-1" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
