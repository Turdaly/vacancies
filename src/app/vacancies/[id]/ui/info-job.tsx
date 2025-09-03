import { Vacancy } from "@/shared/api/vacancy-api";
import { formatNumber } from "@/shared/lib/format-number";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export function InfoJob({
  vacancy,
  children,
}: {
  vacancy: Vacancy | null;
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex gap-10 items-center mb-11">
        <Link href={"/vacancies"} className="cursor-pointer">
          <div className="bg-primary rounded-full w-15 h-15 flex items-center justify-center">
            <ChevronLeft className="text-white size-10" strokeWidth={1.4} />
          </div>
        </Link>
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
        {children}
      </div>
    </>
  );
}
