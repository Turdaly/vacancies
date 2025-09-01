import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
export function RespondForm() {
  const { handleSubmit } = useForm();
  const onSave = (data) => {
    console.log(data)
  }
  return (
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
          onClick={handleSubmit(onSave)}
          type="submit"
          className="absolute bottom-4 right-1/2 w-[175px] rounded-full px-[30px] py-[22px]"
        >
          Отправить
        </Button>
      </div>
    </form>
  );
}
