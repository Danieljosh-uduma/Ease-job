import { FaBookmark } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import MpowerIcon from "../dashboardImages/Mpoer.png";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SavedJobCard() {
  return (
    <div className=" p-5 py-1 bg-[#fff] h-auto w-[100%] rounded-lg shadow-[0_4px_6px_-1.5px_rgba(0,0,0,0.2)] mt-3 mb-2">
      <div className="flex rounded-md">
        <div className="flex w-full justify-between h-[30px] items-center">
          <p className="text-black text-sm text-secondary font-md bg-[#F8F9FA] rounded-md p-1 px-4">PART TIME</p>
          <FaBookmark />
        </div>
      </div>
      {/* CARD DETAILS */}
      <div className="application-right flex w-full h-auto rounded-lg justify-between py-1">
        <div className="flex flex-col justify-left my-auto gap-1">
          <h1 className="text-black text-[14px] font-bold">Technical Support Specialist</h1>
          <div className="flex flex-col justify-left my-auto gap-1">
            <div className="MMpower flex gap-2 items-center">
              <img src={MpowerIcon} alt="" />
              <p className="text-sm">Mpower Jobz Ltd</p>
            </div>
            <div className="MMpower flex gap-2 items-center">
              <RiMoneyDollarCircleLine className='text-sm'/>
              <p className="flex text-sm">N200,000 - N350,000/m</p>
            </div>
            <div className="MMpower flex gap-2 items-center">
              <GrLocation className='text-sm' />
              <p className="flex text-md">Enugu state, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex w-[100%] h-[35px] border-1 border-secondary rounded-md my-4 m-auto item-center justify-center gap-5 items-center">
          <p className="text-sm font-bold text-secondary">View</p>
          <FaArrowRightLong className="text-secondary" />
        </div>
    </div>
  );
}