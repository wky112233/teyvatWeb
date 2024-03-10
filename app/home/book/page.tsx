import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import BookCard from "@/app/ui/book/bookCard";
import Link from "next/link";


export default function Page() {
    const books: BookProps[] = [
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
        {
            name: 'Time Trekker',
            position: "/time_trekker.webp"
        },
    ];
    return (
        <div>
            <Typography variant="h5" className={"text-amber-100 mx-2"}>
                Library
            </Typography>
            <Divider className={"bg-gray-500 my-2"}></Divider>
            <div className={"flex flex-wrap overflow-y-auto"}>
                {books.map((book, index) => (
                    <BookCard key={index} name={book.name} position={book.position}/>
                ))}
            </div>
        </div>
    );
}