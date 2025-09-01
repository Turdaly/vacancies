"use client";
import { formatNumber } from "@/shared/lib/format-number";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default function VacancyPage() {
  const vacancie = {
    id: 2,
    jobTitle: "Frontend-разработчик",
    experience: 2,
    salary: "1100000",
    location: "Астана",
    requirements: [
      "Экспертные знания HTML, CSS и JavaScript",
      "Опыт работы с современными фреймворками, такими как React или Angular",
      "Хорошее понимание адаптивного дизайна",
    ],
    workConditions: [
      "Спортзал и программы оздоровления на территории офиса",
      "Конкурентные бонусы",
      "Спонсируемые компанией тренинги",
    ],
  };
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex gap-10 items-center mb-11">
        <div className="bg-primary rounded-full w-15 h-15 flex items-center justify-center">
          <Link href={""}>
            <ChevronLeft className="text-white size-10" strokeWidth={1.4} />
          </Link>
        </div>
        <h1 className="font-montserrat font-medium text-5xl">
          {vacancie.jobTitle}
        </h1>
      </div>
      <div className="flex justify-between gap-10">
        <div className="ml-[100px] w-[515px]">
          <h2 className="font-montserrat font-medium text-4xl text-primary mb-3">
            от {formatNumber(vacancie.salary)} тг
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="font-montserrat font-medium text-4xl">
                Общие требования:
              </h2>
              <ul className="font-lato text-2xl list-disc text-muted">
                {vacancie.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-montserrat font-medium text-4xl">
                Условия работы:
              </h2>
              <ul className="font-lato text-2xl list-disc text-muted">
                {vacancie.workConditions.map((cnd, i) => (
                  <li key={i}>{cnd}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <form onSubmit={() => {}} className="flex flex-col gap-[30px]">
          <h2 className="font-montserrat font-medium text-4xl">
            Откликнуться на вакансию
          </h2>
          <div className="flex flex-col gap-[15px]">
            <Input
              className="font-lato !text-xl rounded-2xl border-0 h-[90px] pl-[30px] bg-white"
              placeholder="ФИО"
            />
            <Input
              type="email"
              className="font-lato !text-xl rounded-2xl border-0 h-[90px] pl-[30px] bg-white"
              placeholder="Email"
            />
            <Input
              className="font-lato !text-xl rounded-2xl border-0 h-[90px] pl-[30px] bg-white"
              placeholder="Телефон"
            />
            <Link
              href={"/profile/github"}
              className="flex justify-between items-center font-lato text-xl rounded-[20px] leading-[130%] px-6 h-[90px] bg-white"
            >
              Добавить GitHub
              <ChevronRight className="size-10" strokeWidth={1.4} />
            </Link>
            <Link
              href={"/profile/gitlub"}
              className="flex justify-between items-center font-lato text-xl rounded-[20px] leading-[130%] px-6 h-[90px] bg-white"
            >
              Добавить GitLub
              <ChevronRight className="size-10" strokeWidth={1.4} />
            </Link>
            <Button
              type="submit"
              className="absolute bottom-4 right-1/2 w-[175px] rounded-full px-[30px] py-[22px]"
            >
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
