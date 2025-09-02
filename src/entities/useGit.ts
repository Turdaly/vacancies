import { useState } from "react";

type Key = "github" | "gitlub";
export const useGit = (key: Key) => {
  const [nickname, setNickname] = useState(() => {
    const git = localStorage.getItem(key);
    return git ? JSON.parse(git).nickname : "";
  });

  const [repoCount, setRepoCount] = useState(() => {
    const git = localStorage.getItem(key);
    return git ? JSON.parse(git).repoCount : "";
  });

  return { nickname, repoCount, setNickname, setRepoCount };
};
