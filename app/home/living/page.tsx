import * as React from "react";
import Divider from "@mui/material/Divider";
import LivingCard from "@/app/ui/living/livingCard";
import CheckBoxSelect from "@/app/ui/checkBoxSelect";
import { Regions } from "@/public/data/selectData";

export default function Page() {
  const enemies: Enemy[] = [
    {
      name: "Xuanwen Beast",
      position: "/xuanwen_beast.webp",
    },
    {
      name: "Xuanwen Beast",
      position: "/xuanwen_beast.webp",
    },
    {
      name: "Xuanwen Beast",
      position: "/xuanwen_beast.webp",
    },
    {
      name: "Xuanwen Beast",
      position: "/xuanwen_beast.webp",
    },
    {
      name: "Xuanwen Beast",
      position: "/xuanwen_beast.webp",
    },
    {
      name: "Xuanwen Beast",
      position: "/xuanwen_beast.webp",
    },
    {
      name: "Xuanwen Beast",
      position: "/xuanwen_beast.webp",
    },
  ];

  return (
    <div>
      <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>Enemies</h5>
      <Divider className={"bg-gray-500 my-2"}></Divider>
      <div className={"flex w-1/2 h-16 items-center"}>
        <h5
          className={"font-serif text-base text-amber-100 mx-2 justify-center"}
        >
          {" "}
          filter{" "}
        </h5>
        <div className={"items-center w-full"}>
          <CheckBoxSelect selectSize={"small"} items={Regions}></CheckBoxSelect>
        </div>
        <button
          className={
            "bg-gray-600 px-3 p-2 text-amber-50 rounded-md text-base hover:bg-gray-700"
          }
        >
          Confirm
        </button>
      </div>
      <div className={"flex flex-wrap overflow-y-auto"}>
        {enemies.map((enemy, index) => (
          <LivingCard key={index} {...enemy} />
        ))}
      </div>
    </div>
  );
}
