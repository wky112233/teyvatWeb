"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import MaterialContent from "@/app/ui/material/materialContent";

interface MaterialCardProps {
  material: Material;
}

export default function MaterialCard({ material }: MaterialCardProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Card
      sx={{
        backgroundColor: "transparent",
      }}
      className={
        "bg-gray-900 text-amber-50 border border-gray-500 mx-4 my-2 hover:outline outline-slate-300"
      }
    >
      <MaterialContent
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        material={material}
      ></MaterialContent>
      <CardActions
        onClick={() => toggleDrawer(true)}
        className={"flex-col justify-start"}
      >
        <CardMedia
          component="img"
          sx={{ width: 128 }}
          image={material.material_icon_img}
          alt="Live"
          className={"mx-2 rounded-md bg-[#995f2c]"}
        />
        <CardContent className={"h-[24px]"}>
          <h5 className={"h-full w-full text-xl -ml-2"}>
            {material.material_name}
          </h5>
        </CardContent>
      </CardActions>
    </Card>
  );
}
