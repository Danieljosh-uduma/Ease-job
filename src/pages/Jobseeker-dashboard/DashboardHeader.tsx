
import { GoBell } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";


export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center w-full p-2 box-border">
      <h1 className="font-bold text-[26px]">Dashboard</h1>
      <div className="flex w-[40%] gap-5 justify-between">
        <div className="search flex height-auto width-content border-black-500 border-2 rounded-[50px] px-4 justify-between py-2 w-80 h-10 focus:outline-1 hover:outline-black-600">
          <input
          type="text"
          placeholder="Search"
          className="focus:outline-none"
          />
         <IoMdSearch className="text-gray-600 font-bold text-2xl" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <GoBell className="text-xl text-gray-600" />
          <RiArrowDropDownLine className="flex text-4xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};