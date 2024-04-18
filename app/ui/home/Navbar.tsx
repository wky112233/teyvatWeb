import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
export default function NestedList() {
  const sideList = [
    {
      href: "/home/character",
      icon: <PhotoCameraFrontOutlinedIcon className={"text-amber-100"} />,
      label: "Characters",
    },
    {
      href: "/home/living",
      icon: (
        <Image
          src={"/slim.png"}
          alt={"slim.png"}
          width={25}
          height={25}
        ></Image>
      ),
      label: "Living Beings",
    },
    {
      href: "/home/material",
      icon: (
        <Image
          src={"/material_icon.png"}
          alt={"material_icon.png"}
          width={25}
          height={25}
        ></Image>
      ),
      label: "Materials",
    },
    {
      href: "/home/food",
      icon: (
        <Image
          src={"/food.png"}
          alt={"search.png"}
          width={25}
          height={25}
        ></Image>
      ),
      label: "Food",
    },
  ];

  return (
    <div className={"h-full w-[240px] border-l border-r border-gray-500"}>
      <List
        sx={{
          width: "100%",
          maxWidth: 240,
          fontFamily: "Lusitana, Arial, sans-serif",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={`${lusitana.className} h-full bg-gray-900 overflow-y-auto text-amber-50 z-0 font-serif`}
      >
        {sideList.map((item) => (
          <Link href={item.href} key={item.href}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} className={"font-serif"} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>
  );
}
