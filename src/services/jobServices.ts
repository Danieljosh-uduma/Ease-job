import type { Job } from "@/types/Job";

const JOB_API_URL = "http://localhost:8080/api/jobs";

export const createJob = async (job: Omit<Job, "_id">): Promise<Job> => {
  const res = await fetch(JOB_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });

  if (!res.ok) throw new Error("Sorry! Failed to create job 🥺");
  return res.json();
};

export const getJobs = async (): Promise<Job[]> => {
  const res = await fetch(JOB_API_URL);

  if (!res.ok) throw new Error("Soory! Failed to fetch jobs 🥺");

  const data = await res.json();
  console.log("Jobs: ", data);

  return data.jobs;
};
