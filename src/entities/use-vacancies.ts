import { getVacancies, getVacancy, Vacancy } from "@/shared/api/vacancy-api";
import { useEffect, useState } from "react";

export const useVacancies = () => {
  const [vacancies, setVacancies] = useState<Vacancy[] | []>([]);

  useEffect(() => {
    async function fetch() {
      const data = await getVacancies();
      setVacancies(data)
    }
    fetch();
  });
  return {
    vacancies,
  };
};
