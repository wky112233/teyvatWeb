"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import MaterialContent from "@/app/ui/material/materialContent";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

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
                    image={material.material_name}
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
