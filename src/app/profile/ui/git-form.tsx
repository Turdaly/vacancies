import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";
import { Dispatch, FormEvent, SetStateAction } from "react";

type GitFormProps = {
  nickname: string;
  repoCount: string;
  setNickname: Dispatch<SetStateAction<string>>;
  setRepoCount: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export function GitForm({
  onSubmit,
  nickname,
  repoCount,
  setNickname,
  setRepoCount,
}: GitFormProps) {
  return (
    <form onSubmit={(e) => onSubmit(e)} className="mx-[200px]">
      <div className="grid w-full gap-5 mb-[30px]">
        <Label className="font-montserrat font-medium text-3xl leading-[130%]">
          Никнейм
        </Label>
        <Input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="font-lato !text-xl rounded-2xl border-0 h-[80px] px-[30px] bg-white"
        />
      </div>
      <div className="grid w-full gap-5">
        <Label className="font-montserrat font-medium text-3xl leading-[130%]">
          Количество репозиториев
        </Label>
        <Select value={repoCount} onValueChange={setRepoCount}>
          <SelectTrigger className="font-lato text-2xl w-full !h-[80px] px-[30px] rounded-2xl bg-white">
            <SelectValue placeholder="Не выбрано" />
          </SelectTrigger>
          <SelectContent className="!w-full rounded-2xl relative">
            <SelectGroup className="!w-full rounded-2xl  ">
              <SelectItem
                value="1-5"
                className="!w-full rounded-2xl !text-2xl "
              >
                1-5
              </SelectItem>
              <SelectItem
                value="5-10"
                className="!w-full rounded-2xl !text-2xl "
              >
                5-10
              </SelectItem>
              <SelectItem
                value="+10"
                className="!w-full rounded-2xl !text-2xl "
              >
                +10
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        className="rounded-full mx-auto mt-40 px-[30px] py-[22px] flex justify-center cursor-pointer"
      >
        Продолжить
      </Button>
    </form>
  );
}
