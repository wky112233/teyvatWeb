"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Link from "next/link";
import CardActions from '@mui/material/CardActions';
import BookContent from "@/app/ui/book/bookContent";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function BookCard ({name, position}: BookProps) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };

    return (
            <Card className={"w-5/12 bg-gray-900 text-amber-50 border border-gray-500 mx-4 my-2 hover:outline outline-slate-300"} >
                <CardActions onClick={() => toggleDrawer(true)} className={"flex justify-start"}>
                    <CardMedia
                        component="img"
                        sx={{ width: 64 }}
                        image={position}
                        alt="Live"
                        className={"mx-2 rounded-md bg-gradient-to-r from-gray-700 to-gray-500"}
                    />
                    <CardContent>
                        {/*<div className={"w-[100px]"}>*/}
                        {/*    <Image src={"/time_trekker.webp"} alt={"Time Trekker"} width={64} height={64}></Image>*/}
                        {/*</div>*/}
                        <div className={"flex-1 flex-col"}>
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
                <BookContent open={drawerOpen} toggleDrawer={toggleDrawer}></BookContent>
            </Card>
    );
}