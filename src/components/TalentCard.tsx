import type { Talent } from "@/types/Talent";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";

export default function TalentCard({ talent }: { talent: Talent }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[16px] md:gap-[20px]  shadow-2xl p-[24px] md:px-[40px]  rounded-[12px] w-[100%] md:w-[380px] max:h-[388px] md:h-[422px] mx-auto ">
      <img
        src={talent.avatarUrl}
        alt={talent.name}
        className="w-24 h-24 rounded-full object-cover "
      />

      <h3 className="font-semibold text-lg">{talent.name}</h3>
      <p className="text-muted-foreground">{talent.role}</p>
      <p className="text-sm text-muted-foreground">{talent.experience}</p>

      <div className="flex flex-wrap justify-center gap-2">
        {talent.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 border rounded-md text-xs text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-1 items-start ">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <FaMapMarkerAlt /> {talent.location}
          </p>
          <p className="text-green-600 font-semibold text-sm">
            {talent.availability}
          </p>
        </div>

        <Button className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 cursor-pointer ">
          Hire <LuMoveRight />
        </Button>
      </div>
    </div>
  );
}
