import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
export default function GithubPage() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex gap-[30px] items-center mb-[70px]">
        <Link
          href={"/vacancies/1"}
          className="bg-primary rounded-full w-15 h-15 flex items-center justify-center"
        >
          <ChevronLeft className="text-white size-10" strokeWidth={1.4} />
        </Link>

        <h1 className="font-montserrat font-medium text-4xl">
          Добавить GitHub
        </h1>
      </div>
      <div className="mx-[200px]">
        <div className="grid w-full gap-5 mb-[30px]">
          <Label className="font-montserrat font-medium text-3xl leading-[130%]">
            Никнейм
          </Label>
          <Input className="font-lato !text-xl rounded-2xl border-0 h-[80px] px-[30px] bg-white" />
        </div>
        <div className="grid w-full gap-5">
          <Label className="font-montserrat font-medium text-3xl leading-[130%]">
            Количество репозиториев
          </Label>
          <Select>
            <SelectTrigger className="font-lato text-2xl w-full !h-[80px] px-[30px] rounded-2xl bg-white">
              <SelectValue placeholder="Не выбрано" />
            </SelectTrigger>
            <SelectContent className="!w-full rounded-2xl relative">
              <SelectGroup className="!w-full rounded-2xl  ">
                <SelectItem
                  value="apple"
                  className="!w-full rounded-2xl !text-2xl "
                >
                  1-5
                </SelectItem>
                <SelectItem
                  value="banana"
                  className="!w-full rounded-2xl !text-2xl "
                >
                  5-10
                </SelectItem>
                <SelectItem
                  value="blueberry"
                  className="!w-full rounded-2xl !text-2xl "
                >
                  +10
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
        <Button className="rounded-full mx-auto mt-40 px-[30px] py-[22px]">Продолжить</Button>
    </div>
  );
}
