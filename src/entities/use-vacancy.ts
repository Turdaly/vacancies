import { getVacancy, Vacancy } from "@/shared/api/vacancy-api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useVacancy = () => {
  const { id } = useParams<{ id: string }>();
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  useEffect(() => {
    if (id) localStorage.setItem("vacancyId", id);
    async function fetch() {
      try {
        const data = await getVacancy(id);
        setVacancy(data[0]);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, [id]);
  return { vacancy };
};
