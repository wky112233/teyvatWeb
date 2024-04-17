import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import BookCard from "@/app/ui/book/bookCard";
import Link from "next/link";


export default function Page() {
    const books: CharacterCardProps[] = [
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
        {
            Name: 'Time Trekker',
            location: "/time_trekker.webp"
        },
    ];
    return (
        <div>
            <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>
                Library
            </h5>
            <Divider className={"bg-gray-500 my-2"}></Divider>
            <div className={"flex flex-wrap overflow-y-auto"}>
                {books.map((book, index) => (
                    <BookCard key={index} Name={book.Name} location={book.location}/>
                ))}
            </div>
        </div>
    );
}