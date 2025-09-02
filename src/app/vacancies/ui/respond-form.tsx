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
import { Input } from "@/shared/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useGit } from "@/entities/useGit";

type RespondFormValues = {
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
  const github = localStorage.getItem("github")
  const gitlub = localStorage.getItem("gitlub")
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
      {gitErrors.github}
      {gitErrors.gitlub}
      <h2 className="font-montserrat font-medium text-4xl">
        Откликнуться на вакансию
      </h2>
      <div className="flex flex-col gap-[15px]">
        <Input
          {...register("userData.fullName", {
            required: "Обязательная поля",
            validate: (fullName) =>
              validateFullName(fullName) || "Неверный формат ФИО",
          })}
          className="font-lato !text-xl rounded-2xl border-0 h-[90px] pl-[30px] bg-white"
          placeholder="ФИО"
        />
        {errors.userData?.fullName?.type === "required" && (
          <span className="text-red-400">
            {errors.userData.fullName.message}
          </span>
        )}
        {errors.userData?.fullName?.type === "validate" && (
          <span className="text-red-400">
            {errors.userData.fullName.message}
          </span>
        )}
        <Input
          {...register("userData.email", {
            required: "Обязательная поля",
            validate: (email) =>
              vaildateEmail(email) || "Неверный формат электронной почты",
          })}
          type="email"
          className="font-lato !text-xl rounded-2xl border-0 h-[90px] pl-[30px] bg-white"
          placeholder="Email"
        />
        {errors.userData?.email?.type === "required" && (
          <span className="text-red-400">{errors.userData.email.message}</span>
        )}
        {errors.userData?.email?.type === "validate" && (
          <span className="text-red-400">{errors.userData.email.message}</span>
        )}
        <Input
          {...register("userData.phoneNumber", {
            required: "Обязательное поле",
            validate: (phoneNumber) =>
              validateMobileNumber(phoneNumber) ||
              "Неверный формат номер телефона",
          })}
          type="tel"
          placeholder="Телефон"
          className="font-lato !text-xl rounded-2xl border-0 h-[90px] pl-[30px] bg-white"
        />
        {errors.userData?.phoneNumber?.type === "validate" && (
          <p className="text-red-400">{errors.userData.phoneNumber.message}</p>
        )}
        {errors.userData?.phoneNumber?.type === "required" && (
          <p className="text-red-400">{errors.userData.phoneNumber.message}</p>
        )}

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
