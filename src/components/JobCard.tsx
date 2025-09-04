import type { Job } from "@/types/Job";
import s4 from "../assets/s4.svg";
import s5 from "../assets/MapPin.svg";
import s6 from "../assets/s6.svg";
import s7 from "../assets/s7.svg";
import s8 from "../assets/s8.svg";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

interface JobProps {
  job: Job;
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  return (
    <div className=" flex flex-col justify-center items-center gap-[16px] md:gap-[20px]  shadow-2xl p-[24px] md:px-[40px]  rounded-[12px] w-[100%] md:w-[380px] h-[270px] md:h-[326px] mx-auto ">
      <div className="flex justify-between items-center w-[332px] h-[28px]  ">
        <h4 className="w-fit h-[28px] rounded-sm p-[4px] text-destructive bg-[#f8f9fa]">
          {job.type}
        </h4>
        <img className="text-card w-[24px] h-[24px] " src={s8} alt="icon" />
      </div>
      <div className="flex flex-col gap-[8px] w-[332px] h-fit ">
        <h1 className=" text-[16px] font-[600] leading-[100%] w-[295px] h-[20px] text-foreground  ">
          {job.title}
        </h1>
        <div className="flex items-center gap-2 w-[295px] h-[20px] ">
          <img className="w-[20px] h-[20px] " src={s7} alt="icon" />
          <p className="w-[100%] h-[20px] font-[400] text[14px] leading-[20px] text-card-foreground ">
            {job.company}
          </p>
        </div>
        <div className="flex items-start self-start gap-2 w-[237px] h-[20px] pt-1 ">
          <img className="w-[16px] h-[16px] " src={s6} alt="icon" />
          <p className=" w-[211px] h-[20px] font-[400] text[14px] leading-[20px] text-card-foreground ">
            {job.salary}
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[78px] md:w-[332px] md:h-[62px] flex flex-col gap-[16px] md:gap-0  ">
        <div className="flex items-center gap-[8px] w-[140px] h-[22px]">
          <img className="w-[16px] h-[16px] " src={s5} alt="icon" />
          <p className="w-[116px] h-[22px] font-[400] text-[14px] leading-[20px] text-card-foreground ">
            {job.location}
          </p>
        </div>
        <Button
          asChild
          className="cursor-pointer flex items-center justify-center gap-[10px] bg-secondary w-[100%] md:w-[105px] h-[40px] md:h-[40px] md:self-end  "
        >
          <span className="w-[49px] h-[24px] font-[400] text-[16px] leading-[24px] ">
            Apply <FaArrowRight className="w-[24px] h-[24px] " />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
