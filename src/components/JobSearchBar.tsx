import { useState } from "react";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center items-center  bg-gray-transparent ">
      <div
        className="
          flex items-center bg-muted/50 rounded-sm px-[16px] py[4px] md:px-[32px] md:py-[8px]
          md:max-w-[648px] h-[64px] w-full
          focus-within:max-w-2xl 
          focus-within:shadow-md
          transition-all duration-300 ease-in-out 
        "
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow bg-transparent outline-none px-2 "
        />
        <Button
          asChild
          className="flex items-start md:items-center justify-center gap-[6.41px] md:gap-[8px] bg-muted/50 md:bg-background  md:w-[113px] h-[48px] border-non md:border-[1px]  md:border-primary cursor-pointer p-[12px] rounded-[8px] "
        >
          <div className="flex gap-[8px] items-start md:items-center w-fit ">
            <FaSearch className=" w-[24px] h-[24px] font-normal text-primary hover:!text-[#ffffff]" />
            <span className="hidden md:inline-block font-[600] text-[12.83px] md:text-[16px] leading-[24px] !text-primary ">
              {/* <FaSearch className="!block w-[24px] h-[24px] font-normal text-primary hover:!text-[#ffffff]" /> */}
              Search
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
}
