import { ArrowRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Button } from "@/shared/ui/button";
export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-14">
      <h1 className={`font-montserrat text-5xl font-medium`}>Наши вакансии</h1>

      <div className="grid grid-cols-3 justify-center gap-7">
        {cards.map((card, i) => (
          <Card className="max-w-sm px-1 py-7 w-[566px]" key={i}>
            <CardHeader>
              <CardDescription className="font-lato font-normal text-2xl">Алматы</CardDescription>
              <CardTitle className="font-lato font-normal text-2xl ml-1">
                Frontend-разработчик
              </CardTitle>
              <CardDescription className="font-lato font-normal text-2xl">
                от 1 100 000 тг
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                className="rounded-full bg-[#3b46e0] hover:bg-indigo-500 cursor-pointer px-5 py-4 text-xl"
                size={null}
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
