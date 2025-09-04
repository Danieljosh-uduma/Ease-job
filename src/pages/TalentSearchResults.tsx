import { useEffect, useState } from "react";
import type { Talent } from "@/types/Talent";
import TalentCard from "@/components/TalentCard";
import { getTalents } from "@/services/talentServices";
import { RootLayout } from "@/components/layout";
import SearchBar from "@/components/JobSearchBar";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function TalentSearchResults() {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const talents = await getTalents();
        setTalents(talents);
        console.log("Talents: ", talents);
      } catch (err) {
        console.error(err);
        setError("Failed to load Talents");
      } finally {
        setLoading(false);
      }
    };
    fetchTalents();
  }, []);

  if (loading) return <p className="p-6">Loading talents...Please wait</p>;
  if (error) return <p>{error}</p>;

  return (
    <RootLayout>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 h-full ">
        {talents.length > 0 ? (
          talents.map((t) => <TalentCard key={t._id} talent={t} />)
        ) : (
          <p>No talents found 😭</p>
        )}
      </div>
      <div className="w-[100%] h-[227.24px] md:w-[1162px] md:h-[257px] md:rounded-[24px] flex flex-col gap-[40px] items-center justify-center p-[42px] bg-primary mx-auto mb-14 ">
        <h1 className="w-[294.11px] h-[60px] md:w-[485.31px] md:h-[88px] font-[600] text-[24px] md:text-[36px] leading-[44px] text-center text-background ">
          Hire the Best Talent in Minutes
        </h1>
        <Button
          asChild
          className="flex items-center justify-center gap-[6.41px] md:gap-[10px] bg-background w-[129.09px] h-[39.24px] md:w-[178px] md:h-[45.66px] pt-[9.62px] pr-[16.04px] pb-[9.62px] pl-[16.04px] md:pt-[12.83px] md:pr-[19.24px] md:pb-[12.83px] md:pl-[19.24px] rounded-[6.41px] md:rounded-[6.41px]"
        >
          <span className=" font-[400] text-[12.83px] md:text-[16px] leading-[24px] !text-foreground ">
            Hire Now
            <FaArrowRight className="text-[#000]" />
          </span>
        </Button>
      </div>
    </RootLayout>
  );
}
