import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-[#1d1e1f] rounded text-base px-4 py-2">
      <input
        type="text"
        name="searchBarInp"
        placeholder="Search anything"
        className="block outline-none"
      />
      <button>
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
