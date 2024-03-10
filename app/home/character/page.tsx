import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CharacterCard from "@/app/ui/character/characterCard";
export default function Page() {
    const books: BookProps[] = [
        {
            name: 'Furina',
            position: "/Furina.webp"
        },
        {
            name: 'Furina',
            position: "/Furina.webp"
        },
        {
            name: 'Furina',
            position: "/Furina.webp"
        },
        {
            name: 'Furina',
            position: "/Furina.webp"
        },
        {
            name: 'Furina',
            position: "/Furina.webp"
        },
        {
            name: 'Furina',
            position: "/Furina.webp"
        },
    ]
    return (
        <div>
        <Typography variant="h5" className={"text-amber-100 mx-2"}>
            Characters
        </Typography>
        <Divider className={"bg-gray-500 my-2"}></Divider>
        <div className={"flex flex-wrap  overflow-y-auto"}>
        {/*CharacterCardList*/}
            {books.map((book, index) => (
                <CharacterCard key={index} name={book.name} position={book.position}/>
            ))}
        </div>
    </div>);
}