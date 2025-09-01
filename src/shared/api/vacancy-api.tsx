import api from "./axios";

export interface Vacancy {
  id: number;
  jobTitle: string;
  experience: number;
  salary: string;
  location: string;
  requirements: string[];
  workConditions: string[];
}

export const getVacancies = async (): Promise<Vacancy[] | null> => {
  try {
    const res = await api.get<Vacancy[]>("/vacancies");
    return res.data ? res.data : null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getVacancy = async (id: string) => {
  try {
    const res = await api.get<Vacancy[]>(`/vacancies?id=${id}`);
    return res.data ? res.data : null;
  } catch (err) {
    console.log(err);
  }
};
