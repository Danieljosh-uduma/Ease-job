
// src/pages/Dashboard/Dashboard.tsx
// import { FaArrowRightLong } from "react-icons/fa6";
import Sidebar from "../Jobseeker-dashboard/Sidebar";
import TopBar from "../Jobseeker-dashboard/TopBar";
import ApplicationCard from "./ApplicationCard";
import DashboardHeader from "./DashboardHeader";
import SavedJobCard from "./SavedJobCard";
import RecommendedItems from './Recommended'
import { FaArrowRightLong } from "react-icons/fa6";
// import Recommended from "./Recommended";

document.title = "Jobseeker Dashboard - Ease Job";

function Dashboard() {
  //target the view details button
  
  return (
    <>
      <div className="flex h-screen bg-[#fff] position-fixed w-full overflow-y-scroll scrollbar-hide">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-[#fff]  h-[100%] overflow-y-scroll scrollbar-hide">
          <DashboardHeader />

          {/* <div className="mainBodyTop flex w-full h-[35%] bg-blue-400"></div> */}
          <div className="mainContent flex flex-col h-full w-full px-4  h-[250px]  h-[250px]  h-[250px]">
            
            <div className="MainLeft flex flex-col h-auto pb-1 w-[100%] gap-5">
              <TopBar />
              {/* JOB SECTION */}
              <div className="flex h-auto max-h-[500px] gap-5 py-1 rounded-lg w-[100%]">
                <div className="applications flex flex-col h-full w-2/3 rounded-lg px-5 bg-[#F8F9FA]">
                  {/* APPLICATION HEADING */}
                  <div className="flex w-full applicationTop flex h-content rounded-t-lg items-center px-5 py-4 justify-between">
                    <h1 className="font-bold text-lg">Applications</h1>
                    <div className="applicationRight boder-1px flex gap-2">
                      <select name="" id="" className="border-2 border-gray-300 rounded-md p-1 px-4 w-[150px] h-[35px] bg-white-500 border border-2 border-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex items-center text-center justify-start box-border mx-auto">
                        <option value="" className="w-[100px] px-2">Filter</option>
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                      <button className="text-primary text-md px-4 py-2 rounded">See all</button>
                    </div>
                  </div>
                  {/* APPLICATION CARD*/}
                  <div className="flex flex-col h-auto overflow-scroll scrollbar-hide gap-1">
                    <ApplicationCard />
                    <ApplicationCard />
                    <ApplicationCard />
                    <ApplicationCard />
                    <ApplicationCard />
                  </div>
                </div>
                <div className="flex w-1/3 flex flex-col h-[100%] bg-[#F8F9FA] rounded-lg items-center px-2 py-5 mx-auto">
                  <div className="SavedTop flex w-full justify-between px-5">
                    <h1 className="text-lg font-bold">Saved Jobs</h1>
                    <p className="text-sm text-primary">See all</p>
                  </div>
                    <div className="flex flex-col overflow-scroll scrollbar-hide w-[90%]">
                      <SavedJobCard />
                      <SavedJobCard />
                      <SavedJobCard />
                      <SavedJobCard />
                    </div>
                </div>
              </div>
            </div>

            <div className="recommended w-[100%] h-auto bg-[#F8F9FA] rounded-lg px-5 py-5 mx-auto m-5 px-4">
              {/* RECOMMENDED HEADER */}
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">Recommended</h2>
                <div className="flex items-center">
                  <button className="text-primary text-md px-4 py-2 rounded">See all</button>
                  <FaArrowRightLong className="text-primary" />
                </div>
              </div>

              {/* RECOMMENDED ITEMS */}
              <div className="flex w-full h-auto gap-5">
                <RecommendedItems />
                <RecommendedItems />
                <RecommendedItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
