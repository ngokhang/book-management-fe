"use client";

import * as React from "react";
import _ from "lodash";

interface IPaginateProps {
  totalPages: number;
}

const Paginate: React.FunctionComponent<IPaginateProps> = (props) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentPage > props.totalPages) return;
    setCurrentPage(Number.parseInt(e.currentTarget.innerText));
  };

  return (
    <ol className="paginate w-full my-5 flex justify-center">
      <li
        className={`inline-block px-3 h-fit text-black text-xl text-center cursor-pointer hover:text-cyan-600`}
      >
        <button disabled={currentPage === 1}>Previous</button>
      </li>
      <>
        {currentPage < 5 && (
          <>
            {_.range(1, props.totalPages > 5 ? 6 : props.totalPages + 1).map(
              (page, index) => (
                <li
                  className={`text-paginate ${
                    page === currentPage && "text-cyan-600"
                  }`}
                  onClick={handleClick}
                  key={`${page}-${index}-x`}
                >
                  {page}
                </li>
              )
            )}
            {props.totalPages > 5 && <li className="text-paginate">...</li>}
          </>
        )}
        {currentPage === 5 && (
          <>
            {_.range(1, 8).map((page) => (
              <li
                className={`text-paginate ${
                  page === currentPage && "text-cyan-600"
                }`}
                onClick={handleClick}
                key={`${page}-x`}
              >
                {page}
              </li>
            ))}
            <li className="text-paginate">...</li>
          </>
        )}
        {currentPage > 5 && (
          <>
            <li className={`text-paginate`} onClick={handleClick}>
              1
            </li>
            <li className={`text-paginate`} onClick={handleClick}>
              2
            </li>
            <li className={`text-paginate`}>...</li>
            <>
              {_.range(
                currentPage - 2,
                currentPage + 2 > props.totalPages
                  ? props.totalPages + 1
                  : currentPage + 3
              ).map((page, index) => (
                <li
                  className={`text-paginate ${
                    page === currentPage && "text-cyan-600"
                  }`}
                  onClick={handleClick}
                  key={`test-${index}`}
                >
                  {page}
                </li>
              ))}
              {props.totalPages - currentPage >= 2 && (
                <li className="text-paginate">...</li>
              )}
            </>
          </>
        )}
      </>
      <li
        className={`inline-block px-3 h-fit text-black text-xl text-center cursor-pointer hover:text-cyan-600`}
      >
        <button disabled={currentPage === props.totalPages}>Next</button>
      </li>
    </ol>
  );
};

export default Paginate;
