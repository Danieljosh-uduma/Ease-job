import { useState } from "react";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex justify-center items-center  bg-gray-transparent my-4 ">
          <div
              /*switch back the md:max-w to 648px on desktop view if the expansion is not cool */
        className="
          flex items-center bg-muted/40 rounded-sm px-[16px] py[4px] md:px-[32px] md:py-[8px]
          md:max-w-[480px] h-[64px] w-full
          focus-within:max-w-2xl 
          focus-within:shadow-md
          transition-all duration-500 ease-in-out 
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
          className="flex items-start md:items-center justify-center gap-[6.41px] md:gap-[8px] bg-muted/40 md:bg-background  md:w-[113px] h-[48px] border-non md:border-[1px]  md:border-primary cursor-pointer p-[12px] rounded-[8px] "
        >
          <div className="flex gap-[8px] items-start md:items-center w-fit bg-muted/40 md:bg-none ">
            <FaSearch className=" w-[24px] h-[24px] font-normal text-primary hover:!text-[#ffffff] md:bg-none " />
            <span className="hidden md:inline-block font-[600] text-[12.83px] md:text-[16px] leading-[24px] !text-primary  md:bg-none ">
              Search
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
}
