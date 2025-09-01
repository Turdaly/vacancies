"use client";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatNumber } from "@/shared/lib/format-number";
import { RespondForm } from "../ui/respond-form";
import { getVacancy, Vacancy } from "@/shared/api/vacancy-api";
import { useParams } from "next/navigation";
export default function VacancyPage() {
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    async function fetchVacancy() {
      const data = await getVacancy(id);
      if (data) setVacancy(data[0]);
    }

    fetchVacancy();
  }, []);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex gap-10 items-center mb-11">
        <div className="bg-primary rounded-full w-15 h-15 flex items-center justify-center">
          <Link href={"/vacancies"}>
            <ChevronLeft className="text-white size-10" strokeWidth={1.4} />
          </Link>
        </div>
        <h1 className="font-montserrat font-medium text-5xl">
          {vacancy?.jobTitle}
        </h1>
      </div>
      <div className="flex justify-between gap-10">
        <div className="ml-[100px] w-[515px]">
          <h2 className="font-montserrat font-medium text-4xl text-primary mb-3">
            от {formatNumber(vacancy?.salary || "")} тг
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="font-montserrat font-medium text-4xl">
                Общие требования:
              </h2>
              <ul className="font-lato text-2xl list-disc text-muted">
                {vacancy?.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-montserrat font-medium text-4xl">
                Условия работы:
              </h2>
              <ul className="font-lato text-2xl list-disc text-muted">
                {vacancy?.workConditions.map((cnd, i) => (
                  <li key={i}>{cnd}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <RespondForm />
      </div>
    </div>
  );
}
