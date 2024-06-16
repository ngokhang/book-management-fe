import * as React from "react";

interface IButtonSubmitProps {
  text: string;
  width?: string | undefined;
  disabled: boolean;
}

const ButtonSubmit: React.FunctionComponent<IButtonSubmitProps> = ({
  text,
  width,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`block w-[${
        width || ""
      }] text-center py-2 px-4 rounded bg-cyan-800 text-white uppercase text-base hover:opacity-75 transition-opacity disabled:opacity-75`}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
