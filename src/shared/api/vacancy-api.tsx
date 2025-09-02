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

export const getVacancy = async (id: string): Promise<Vacancy[] | []> => {
  try {
    const res = await api.get(`/vacancies?id=${id}`);
    return res.data ? res.data : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
export const getVacancies = async ():Promise<Vacancy[] | []> => {
  try {
    const res = await api.get(`/vacancies`);
    return res.data ? res.data : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
