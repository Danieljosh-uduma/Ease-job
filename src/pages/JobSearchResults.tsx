import { useEffect, useState } from "react";
import type { Job } from "@/types/Job";
import JobCard from "@/components/JobCard";
import { getJobs } from "../services/jobServices";
import { RootLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/JobSearchBar";
import { FaArrowRight } from "react-icons/fa";

const JobSearchResults = () => {
  const [jobResults, setJobResults] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await getJobs();

        setJobResults(jobs);
        console.log("Jobs:", jobs);
      } catch (err) {
        console.error(err);
        setError("Failed to load jobs 😭");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="p-6">Loading jobs...Please wait</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <RootLayout>
      <>
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 h-full ">
          {jobResults.length > 0 ? (
            jobResults.map((j) => <JobCard key={j._id} job={j} />)
          ) : (
            <p>Ooooops! No job found 😭</p>
          )}
        </div>
        <div className="w-[100%] h-[227.24px] md:w-[1162px] md:h-[257px] md:rounded-[24px] flex flex-col gap-[40px] items-center justify-center p-[42px] bg-primary mx-auto mb-14 ">
          <h1 className="w-[294.11px] h-[60px] md:w-[485.31px] md:h-[88px] font-[600] text-[24px] md:text-[36px] leading-[44px] text-center text-background ">
            Your Next Career Move Starts Here
          </h1>
          <Button
            asChild
            className="flex items-center justify-center gap-[6.41px] md:gap-[10px] bg-background w-[129.09px] h-[39.24px] md:w-[178px] md:h-[45.66px] pt-[9.62px] pr-[16.04px] pb-[9.62px] pl-[16.04px] md:pt-[12.83px] md:pr-[19.24px] md:pb-[12.83px] md:pl-[19.24px] rounded-[6.41px] md:rounded-[6.41px]"
          >
            <span className=" font-[400] text-[12.83px] md:text-[16px] leading-[24px] !text-foreground ">
              Apply Now
              <FaArrowRight className="text-[#000]" />
            </span>
          </Button>
        </div>
      </>
    </RootLayout>
  );
};

export default JobSearchResults;
