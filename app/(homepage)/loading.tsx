import * as React from "react";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center w-full h-[100vh]  z-20 bg-black/25">
      <div className="w-10 h-10 rounded-full border-4 border-black border-t-cyan-400 animate-spin"></div>
    </div>
  );
};

export default Loading;
