"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CharacterContent from "@/app/ui/character/characterContent";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
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
      <CharacterContent
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        character={character}
      ></CharacterContent>
      <CardActions
        onClick={() => toggleDrawer(true)}
        className={"flex-col justify-start"}
      >
        <CardMedia
          component="img"
          sx={{ width: 200, height: 200 }}
          image={character.avatar_icon_img}
          alt="Live"
          className={"mx-2 rounded-md bg-[#995f2c]"}
        />
        <CardContent className={"h-[24px]"}>
          <h5 className={"h-full w-full text-xl -ml-2"}>
            {character.character_name}
          </h5>
        </CardContent>
      </CardActions>
    </Card>
  );
}
