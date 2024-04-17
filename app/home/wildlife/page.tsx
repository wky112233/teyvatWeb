import * as React from 'react';
import Divider from '@mui/material/Divider';
import WildlifeCard from "@/app/ui/wildlife/wildlifeCard";

export default function Page() {
    const enemies: EnemyCardProps[] = [
        {
            name: 'Fluff',
            position: '/fluff.webp'
        },
        {
            name: 'Fluff',
            position: '/fluff.webp'
        },
        {
            name: 'Fluff',
            position: '/fluff.webp'
        },
        {
            name: 'Fluff',
            position: '/fluff.webp'
        },
        {
            name: 'Fluff',
            position: '/fluff.webp'
        },
        {
            name: 'Fluff',
            position: '/fluff.webp'
        },
        {
            name: 'Fluff',
            position: '/fluff.webp'
        },
    ];

    return (
        <div>
            <h5 className={"font-serif text-3xl text-amber-100 mx-2"}>
                Wildlife
            </h5>
            <Divider className={"bg-gray-500 my-2"}></Divider>
            <div className={"flex flex-wrap overflow-y-auto"}>
                {enemies.map((enemy, index) => (
                    <WildlifeCard key={index} name={enemy.name} position={enemy.position}/>
                ))}
            </div>
        </div>
    );
}