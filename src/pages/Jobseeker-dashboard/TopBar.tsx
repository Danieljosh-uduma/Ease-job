
// import React from "react";
import { LuUsers } from "react-icons/lu";
import { HiOutlineBookmark } from "react-icons/hi";
import Broadcast from "./Broadcast";
import { SiGoogledocs } from "react-icons/si";
import { ImArrowUpRight2 } from "react-icons/im";
import CurveVector1 from '../dashboardImages/CurveVector1.png'


export default function TopBar() {
  return (
    <div className="dashboardCard flex gap-4 h-1/4 mt-5 p-1 rounded-lg w-[100%] min-h-[200px] box-border">
      <div className="applications flex bg-secondary h-[100%] w-1/3 rounded-lg">
        {/* LEFT */}
        <div className="flex flex-col w-[50%] h-[80%] items-left pl-5 justify-between m-auto">
          <div className="docs bg-primary w-[60px] h-[60px] flex items-center justify-center rounded-[100%]"><SiGoogledocs className="text-white text-3xl" /></div>
          <div className="appCount">
            <h1 className="text-md text-white font-bold text-2xl">1,698</h1>
            <p className="text-xs text-white text-lg">Applications</p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col w-[50%] h-[100%]">
          <div className="details flex w-[100%] items-center gap-2 my-2 justify-end p-2 rounded-md cursor-pointer">
            <p className="flex text-white">See details</p>
            <ImArrowUpRight2 className="text-white" />
          </div>
          <div className="flex chart h-[70%] w-[100%] items-end justify-end">
            <img src={CurveVector1} alt="" className="mb-[-2px]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-1/3 h-[100%] justify-center">
        <div className="applicationItem flex justify-between items-center py-2 px-4 bg-[#FEF3E7] gap-5 w-[100%] h-[45%] justify-start rounded-md">
          <LuUsers className="text-xl text-[#fff] h-auto w-auto rounded-[100%] bg-primary p-3" />
          <div className="profileVew flex flex-col text-left">
            <h3 className="tex-black text-lg font-bold">540</h3>
            <h5 className="tex-black text-sm font-bold">Profile Views</h5>
          </div>
        </div>
    
        <div className="applicationItem flex justify-between items-center p-2 bg-[#FEF2F2] py-2 px-4 justify-start gap-5 w-[100%] h-[45%] rounded-md">
          <HiOutlineBookmark className="text-xl h-auto w-auto text-[#fff] rounded-[100%] bg-[#A05914] p-3" />
          <div className="profileVew flex flex-col text-left">
            <h3 className="tex-black text-lg font-bold">130</h3>
            <h5 className="tex-black font-bold text-sm">Saved Jobs</h5>
          </div>
        </div>
      </div>
      <Broadcast />
    </div>
  )
}