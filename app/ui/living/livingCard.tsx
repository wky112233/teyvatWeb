"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import LivingContent from "@/app/ui/living/livingContent";

interface CardProps {
  living: LivingBeing;
}

export default function LivingCard({ living }: CardProps) {
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
        "w-5/12 bg-gray-900 text-amber-50 border border-gray-500 mx-4 my-2 hover:outline outline-slate-300"
      }
    >
      <CardActions
        onClick={() => toggleDrawer(true)}
        className={"flex justify-start"}
      >
        <CardMedia
          component="img"
          sx={{ width: 64 }}
          image={living.living_being_icon_img}
          alt="Live"
          className={
            "mx-2 rounded-md bg-gradient-to-r from-gray-700 to-gray-500"
          }
        />
        <CardContent>
          <div className={"flex-1 flex-col"}>
            <h5 className={"text-xl -ml-2"}>{living.living_being_name}</h5>
          </div>
        </CardContent>
      </CardActions>
      <LivingContent
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        living={living}
      ></LivingContent>
    </Card>
  );
}
