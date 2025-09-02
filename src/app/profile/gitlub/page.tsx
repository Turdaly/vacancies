"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { validateNickname } from "@/shared/lib/validation";
import { FormEvent, useState } from "react";
import { GitForm } from "../ui/git-form";
import { useRouter } from "next/navigation";
import { useGit } from "@/entities/useGit";
export default function GithubPage() {
  const router = useRouter();
  const { nickname, repoCount, setNickname, setRepoCount } = useGit('gitlub')
  const vacancyId = localStorage.getItem("vacancyId");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nickname) return alert("Напишите nickname");
    if (!validateNickname(nickname))
      return alert("Не правильный формат никнейма");
    if (!repoCount) return alert("Выберите количество репозиториев");
    const github = { nickname: nickname, repoCount: repoCount };
    localStorage.setItem("gitlub", JSON.stringify(github));
    router.push(`/vacancies/${vacancyId}`);
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="flex gap-[30px] items-center mb-[70px]">
        <Link
          href={`/vacancies/${vacancyId}`}
          className="bg-primary rounded-full w-15 h-15 flex items-center justify-center"
        >
          <ChevronLeft className="text-white size-10" strokeWidth={1.4} />
        </Link>

        <h1 className="font-montserrat font-medium text-4xl">
          Добавить GitLub
        </h1>
      </div>
      <GitForm
        nickname={nickname}
        repoCount={repoCount}
        setNickname={setNickname}
        setRepoCount={setRepoCount}
        onSubmit={onSubmit}
      />
    </div>
  );
}
