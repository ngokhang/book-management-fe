import IBook from "@/interfaces/IBook";
import * as React from "react";
import BookCard from "./BookCard";
import Paginate from "./Pagniate";
import IResponse from "@/interfaces/IResponse";

interface IBookListProps {
  booksData: IResponse<IBook>;
}

const BookList: React.FunctionComponent<IBookListProps> = ({ booksData }) => {
  return (
    <ul className="flex flex-wrap items-center md:justify-between gap-4 w-full xl:w-[calc(100%_-_20rem_-_16px)]">
      {booksData.docs.map((book) => (
        <BookCard key={book._id} data={book} />
      ))}
      <Paginate totalPages={booksData.totalPages} />
    </ul>
  );
};

export default BookList;
