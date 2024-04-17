"use client"
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from "next/link";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import Image from "next/image";
import {lusitana} from "@/app/ui/fonts";
export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={"h-full w-[240px] border-l border-r border-gray-500"}>
            <List
                sx={{ width: '100%', maxWidth: 240, fontFamily: 'Lusitana, Arial, sans-serif'  }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" className={"bg-gray-950 text-base text-amber-100 text-center "}>
                        {/*Contents*/}
                    </ListSubheader>
                }
                className={`${lusitana.className} h-full bg-gray-900 overflow-y-auto text-amber-50 z-0 font-serif`}
            >
                <Link href={"/home/character"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PhotoCameraFrontOutlinedIcon className={"text-amber-100"} />
                        </ListItemIcon>
                        <ListItemText primary="Characters" className={"font-serif"} />
                    </ListItemButton>
                </Link>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <Image src={"/slim.png"} alt={"slim.png"} width={25} height={25}></Image>
                    </ListItemIcon>
                    <ListItemText primary="Living Beings" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link href={'/home/enemies'}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <AdbOutlinedIcon className={"text-amber-100"} />
                                </ListItemIcon>
                                <ListItemText primary="Enemies and Monsters" />
                            </ListItemButton>
                        </Link>
                        <Link href={'/home/wildlife'}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PetsOutlinedIcon className={"text-amber-100"} />
                                </ListItemIcon>
                                <ListItemText primary="Wildlife" className={`${lusitana.className}`} />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>
                <Link href={"/home/material"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Image src={"/material_icon.png"} alt={"search.png"} width={25} height={25}></Image>
                        </ListItemIcon>
                        <ListItemText primary="Materials" />
                    </ListItemButton>
                </Link>
                <Link href={"/home/food"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Image src={"/food.png"} alt={"search.png"} width={25} height={25}></Image>
                        </ListItemIcon>
                        <ListItemText primary="Food" />
                    </ListItemButton>
                </Link>
                <Link href={"/home/search"}>
                    <ListItemButton>
                        <ListItemIcon>
                            {/*https://wiki.hoyolab.com/_nuxt/img/menu-l1-quests.c433db8.png*/}
                            <Image src={"https://wiki.hoyolab.com/_nuxt/img/menu-l1-quests.c433db8.png"} alt={"search.png"} width={25} height={25}></Image>
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItemButton>
                </Link>
            </List>
        </div>

    );
}