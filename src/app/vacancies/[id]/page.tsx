"use client";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import Link from "next/link";
import { useState } from "react";
import { formatNumber } from "@/shared/lib/format-number";
import { RespondForm } from "../ui/respond-form";
import { useVacancy } from "@/entities/use-vacancy";
import { InfoJob } from "../ui/info-job";
type VacancyResponse = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

export default function VacancyPage() {
  const { vacancy } = useVacancy();
  const [github] = useState(localStorage.getItem("github"));
  const [gitlub] = useState(localStorage.getItem("gitlub"));

  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ userData: VacancyResponse }>({
    defaultValues: JSON.parse(localStorage.getItem("userData") || "{}"),
  });

  useFormPersist("userData", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const onSave = (data: any) => {
    if (github && gitlub) {
      const gth = JSON.parse(github);
      const gtl = JSON.parse(gitlub);
      const userData = {
        ...data,
        vsc: {
          github: {
            ...gth,
          },
          gitlub: {
            ...gtl,
          },
        },
      };
      console.log(userData);
      alert("Успешно отправлен");
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <InfoJob vacancy={vacancy}>
        <RespondForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSave={onSave}
        />
      </InfoJob>
    </div>
  );
}
