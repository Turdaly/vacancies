import { ChevronRight, Check } from "lucide-react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  vaildateEmail,
  validateFullName,
  validateMobileNumber,
} from "@/shared/lib/validation";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FormField } from "../../../shared/ui/form-field";

export type RespondFormValues = {
  userData: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
};

type RespondFormProps = {
  register: UseFormRegister<RespondFormValues>;
  handleSubmit: UseFormHandleSubmit<RespondFormValues>;
  errors: FieldErrors<RespondFormValues>;
  onSave: (data: RespondFormValues) => void;
};
export function RespondForm({
  register,
  errors,
  handleSubmit,
  onSave,
}: RespondFormProps) {
  const [gitErrors, setGitErrors] = useState({
    github: "",
    gitlub: "",
  });
  const github = localStorage.getItem("github");
  const gitlub = localStorage.getItem("gitlub");
  const beforeSave = (data: RespondFormValues) => {
    if (!github) {
      setGitErrors({
        ...gitErrors,
        github: "Заполните поле github",
      });
      return;
    }
    if (!gitlub) {
      setGitErrors({
        ...gitErrors,
        gitlub: "Заполните поле gitlub",
      });
      return;
    }
    onSave(data);
  };
  return (
    <form
      onSubmit={handleSubmit(beforeSave)}
      className="flex flex-col gap-[30px]"
    >
      <h2 className="font-montserrat font-medium text-4xl">
        Откликнуться на вакансию
      </h2>
      <div className="flex flex-col gap-[15px]">
        <FormField
          name="fullName"
          register={register}
          errors={errors}
          placeholder="ФИО"
          validation={{
            required: "Обязательное поле",
            validate: (value: string) =>
              validateFullName(value) || "Неверный формат ФИО",
          }}
        />
        <FormField
          name="email"
          register={register}
          errors={errors}
          placeholder="Email"
          validation={{
            required: "Обязательное поле",
            validate: (value: string) =>
              vaildateEmail(value) || "Неверный формат электронной почты",
          }}
        />
        <FormField
          name="phoneNumber"
          register={register}
          errors={errors}
          placeholder="Телефон"
          validation={{
            required: "Обязательное поле",
            validate: (value: string) =>
              validateMobileNumber(value) || "Неверный формат номер телефона",
          }}
        />

        <Link
          href={"/profile/github"}
          className="flex justify-between items-center font-lato text-xl rounded-[20px] leading-[130%] px-6 h-[90px] bg-white"
        >
          <div className="flex items-center gap-3">
            Добавить GitHub
            {github && <Check className="text-green-700" />}
          </div>
          <ChevronRight className="size-10" strokeWidth={1.4} />
        </Link>
        <p className="text-red-400">{gitErrors.github}</p>
        <Link
          href={"/profile/gitlub"}
          className="flex justify-between items-center font-lato text-xl rounded-[20px] leading-[130%] px-6 h-[90px] bg-white"
        >
          <div className="flex items-center gap-3">
            Добавить GitLub
            {gitlub && <Check className="text-green-700" />}
          </div>
          <ChevronRight className="size-10" strokeWidth={1.4} />
        </Link>
        <p className="text-red-400">{gitErrors.gitlub}</p>
        <Button
          type="submit"
          className="fixed bottom-4 right-1/2 w-[175px] rounded-full px-[30px] py-[22px]"
        >
          Отправить
        </Button>
      </div>
    </form>
  );
}
