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
export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={"h-full w-[240px] border-l border-r border-gray-500"}>
            <List
                sx={{ width: '100%', maxWidth: 240 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" className={"bg-gray-950 text-amber-100"}>
                        Contents
                    </ListSubheader>
                }
                className={"h-full bg-gray-900 overflow-y-auto text-amber-50 z-0"}
            >
                <Link href={"/home/book"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LibraryBooksIcon className={"text-amber-100"} />
                        </ListItemIcon>
                        <ListItemText primary="Books" />
                    </ListItemButton>
                </Link>
                <Link href={"/home/character"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PhotoCameraFrontOutlinedIcon className={"text-amber-100"} />
                        </ListItemIcon>
                        <ListItemText primary="Characters" />
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
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <AdbOutlinedIcon className={"text-amber-100"} />
                            </ListItemIcon>
                            <ListItemText primary="Enemies and Monsters" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <PetsOutlinedIcon className={"text-amber-100"} />
                            </ListItemIcon>
                            <ListItemText primary="Wildlife" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>

    );
}