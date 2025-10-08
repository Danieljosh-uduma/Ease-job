
// src/pages/Dashboard/Sidebar.tsx
// import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import { NavLogo } from "../../components/widgets";
import { RiHome4Line } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RxQuestionMarkCircled } from "react-icons/rx";




// import { useState } from "react";


function Sidebar() {
  return (
    <div className="w-[280px] border-r-[1.5px] text-white h-[100%] px-1 py-4 px-3 justify-between flex flex-col overflow-x-hidden box-border overflow-y-hidden position-fixed">
      <div className="sideBarUp">
        <div className="flex items-center align justify-between w-full h-10">
          <NavLogo />
          <LuPanelLeftClose className="text-primary font-old text-2xl" />
        </div>
        {/* PROFILE COMPLETION */}
        <div className="flex justify-between w-full items-center my-4 mb-10 bb-solid">
          <div className="flex flex-col w-full">
            <div className="flex p-1 rounded-md w-full justify-between items-center">
              <LuUser className="text-primary p-2 font-bold bg-gray-300 h-[35px] w-[35px] border-box rounded-[100%]" />
              <p className="text-md text-black">Paul Nwodo </p>
              <div className="flex flex-col gap-2 my-auto mx-0">
                <div className="h-[30px] w-[30px] bg-gray-200 rounded-[100%]  items-center content-center m-auto outline-4 outline-primary border-primary border-[1px] flex mt-2">
                  <p className="flex m-auto justify-center text-[9px] text-primary">100%</p>
                </div>
                <p className="text-[10px] text-secondary font-bold text-center">Completed</p>
              </div>
              
            </div>
            <p className="text-[11px] mt-1 mx-2 mb-1 text-black">Click to complete your Profile</p>
        <div className="underLine flex h-[1.3px] bg-gray-200 w-[112%] m-auto mx-auto z-index-1 ml-[-11px]"></div>
          </div>
        </div>

        {/* SIDEBAR NAVIGATION BTNs */}
        <div className="flex flex-col h-content p-0 box-border gap-1">
          <div className="flex hover:bg-gray-200 gap-3 p-1 items-center mb-2 h-10 hover:text-black">
            <RiHome4Line className="text-gray-500 font-bold text-md" />
            <p className="text-sm f text-gray-500 hover:text-black">Dashboard</p>
          </div>

          <div className="flex hover:bg-gray-200 gap-3 p-1 items-center mb-2 h-10">
            <LuSearch className="text-gray-500 f text-md" />
            <p className="text-sm f text-gray-500 hover:text-black">Browse Jobs</p>
          </div>

          <div className="flex hover:bg-gray-200 gap-3 p-1 items-center mb-2 h-10">
            <MdOutlineEmail className="text-gray-500 f text-md" />
            <p className="text-sm f text-gray-500 hover:text-black">Messages</p>
          </div>

          <div className="flex hover:bg-gray-200 gap-3 p-1 items-center mb-2 h-10">
            <FaRegCopy className="text-gray-500 f text-md" />
            <p className="text-sm f text-gray-500 hover:text-black">Applications</p>
          </div>
        </div>
      </div>

      <div className="sidebarDown flex flex-col w-full h-content gap-1 h-10 mb-2 gap-4">
        <div className="setting flex text-gray-500 gap-2 hover:bg-gray-200">
          <FiSettings className="flex my-auto h-auto w-content" />
          <p className="setting text-sm text-gray-500 hover:text-black">Settings</p>
        </div>

        <div className="Support flex gap-2 sonner-loader text-gray-500 item-center hover:bg-gray-200">
          <RxQuestionMarkCircled className="flex my-auto h-auto w-content" />
          <p className="question text-sm text-gray-500 hover:text-black">Support</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
