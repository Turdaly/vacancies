"use client";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";
import { formatNumber } from "@/shared/lib/format-number";
import { useVacancies } from "@/entities/use-vacancies";

export default function VacanciesPage() {
  const router = useRouter();
  const { vacancies } = useVacancies();

  const onClick = (id: number) => {
    router.push(`vacancies/${id}`);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <h1 className={`font-montserrat text-5xl font-medium`}>Наши вакансии</h1>

      <div className="grid grid-cols-3 justify-center gap-7">
        {vacancies?.map((vacancy) => (
          <Card className="max-w-sm px-1 py-7 w-[566px]" key={vacancy.id}>
            <CardHeader>
              <CardDescription className="font-lato font-normal text-2xl">
                {vacancy.location}
              </CardDescription>
              <CardTitle className="font-lato font-normal text-2xl ml-1">
                {vacancy.jobTitle}
              </CardTitle>
              <CardDescription className="font-lato font-normal text-2xl">
                от {formatNumber(vacancy.salary)}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={() => onClick(vacancy.id)}
                size={null}
                className="rounded-full bg-primary hover:bg-indigo-500 cursor-pointer px-5 py-4 text-xl"
              >
                Подробнее <ArrowRight className="translate-0.5" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
