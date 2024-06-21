interface IButton {
  width: string;
  text: string;
  marginY?: string;
}

export default function Button({ width, text, marginY }: IButton) {
  return (
    <button
      className={`w-${width} text-center py-2 px-4 ${
        marginY || "mt-4"
      } rounded bg-cyan-800 text-white uppercase text-base hover:opacity-75 transition-opacity disabled:opacity-75`}
    >
      {text}
    </button>
  );
}
