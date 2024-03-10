"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Link from "next/link";
import CardActions from '@mui/material/CardActions';
import CharacterContent from "@/app/ui/character/characterContent";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function CharacterCard ({name, position}: BookProps) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };

    return (
        <Card className={"bg-gray-900 text-amber-50 border border-gray-500 mx-4 my-2 hover:outline outline-slate-300"} >
            <CardActions onClick={() => toggleDrawer(true)} className={"flex-col justify-start"}>
                <CardMedia
                    component="img"
                    sx={{ width: 128 }}
                    image={position}
                    alt="Live"
                    className={"mx-2 rounded-md bg-[#995f2c]"}
                />
                <CardContent className={"h-[24px]"}>
                    {/*<div className={"w-[100px]"}>*/}
                    {/*    <Image src={"/time_trekker.webp"} alt={"Time Trekker"} width={64} height={64}></Image>*/}
                    {/*</div>*/}
                    <div >
                        <Typography variant="body2">
                            {name}
                        </Typography>
                    </div>
                    {/*<Typography variant="body2">*/}
                    {/*    well meaning and kindly. well meaning and kindly.*/}
                    {/*</Typography>*/}
                </CardContent>
                {/*<CardActions>*/}
                {/*    <Button size="small">More</Button>*/}
                {/*</CardActions>*/}
            </CardActions>
            <CharacterContent open={drawerOpen} toggleDrawer={toggleDrawer}></CharacterContent>
        </Card>
    );
}