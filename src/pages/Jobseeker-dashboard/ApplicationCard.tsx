
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import MpowerIcon from '../dashboardImages/Mpoer.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";



export default function Applications() {
  return (
    <div className=" px-5 py-3 bg-[#FFFFFF] h-full w-full rounded-lg shadow-[0_4px_6px_-1.5px_rgba(0,0,0,0.2)] p-5 mt-3 mb-2">
      <div className="application-container flex rounded-md justify-between">
        <div className="flex w-full justify-between h-[30px] items-center py-5">
          <h1 className="text-black text-[14px] font-bold my-1">Technical Support Specialist</h1>
          <p className="text-black"><h5 className="text-sm bg-[#FEF3E7] w-[110px] flex justify-center rounded-sm p-1 px-1 text-[#F58E0B] ">In progress</h5></p>
        </div>
      </div>
      {/* CARD DETAILS */}
      <div className="application-right flex w-full h-auto rounded-lg justify-between py-1">
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
        <div className="flex items-right my-auto px-2 border border-primary border-2 rounded-lg justify-between gap-2">
          <button className="text-primary text-xs font-bold rounded-md p-2">View Details</button>
          <FaArrowRightLong className="text-primary font-bold text-sm my-auto" />
        </div>
      </div>
    </div>
  );
}