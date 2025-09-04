import type { Talent } from "@/types/Talent";

const TALENT_API_URL = "http://localhost:8080/api/talents";

export const getTalents = async (): Promise<Talent[]> => {
  const res = await fetch(TALENT_API_URL);

  if (!res.ok) throw new Error("Failed to fetch talents 🥺🥺🥺");

  const data = await res.json();

  console.log("Talents:", data);

  return data.talents;
};
