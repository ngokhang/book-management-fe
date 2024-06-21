import IBook from "@/interfaces/IBook";
import Link from "next/link";
import * as React from "react";
import Button from "./Button";

interface IBookCardProps {
  data: Omit<IBook, "createdAt" | "updatedAt" | "__v">;
}

const BookCard: React.FunctionComponent<IBookCardProps> = ({ data }) => {
  return (
    <li className="md:w-[calc(100%/2_-_16px)] xl:w-[calc(100%/3_-_16px)] min-h-[580px] flex flex-col p-4 shadow rounded hover:shadow-xl transition-shadow">
      <Link href={`book/${data._id}`}>
        <img src={data.thumbnail} alt="thumbnail_book" />
      </Link>
      <div className="flex flex-col">
        <Link
          href={`book/${data._id}`}
          className="inline-block h-[50px] text-xl hover:text-red-500 transition-colors my-4 text-ellipsis overflow-hidden"
        >
          {data.name}
        </Link>
        <span className="text-xl">
          Author: <span className="font-bold">{data.author}</span>
        </span>
        <span className="text-xl">
          Categories:{" "}
          <span className="font-bold">
            {data.categories.map((category) => category.name)}
          </span>
        </span>
        <span className="text-xl">
          Quantity: <span className="font-bold">{data.quantity}</span>
        </span>
        <p className="text-xl text-ellipsis overflow-hidden mb-10">
          Description: {data.description}
        </p>
        <Link
          href={`book/${data._id}`}
          className={`w-full text-center py-2 px-4 mt-4 rounded bg-cyan-800 text-white uppercase text-base hover:opacity-75 transition-opacity disabled:opacity-75`}
        >
          View Details
        </Link>
      </div>
    </li>
  );
};

export default BookCard;
