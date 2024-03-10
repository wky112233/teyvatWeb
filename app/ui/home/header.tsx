import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';


export default function Header() {
    return (
        <header className="flex justify-start items-center p-4 h-[40px] bg-gray-900 text-amber-50 z-40 ">
            <div className="flex items-center">
                {/* Add header items here, e.g. profile picture or logout button */}
                <Breadcrumbs separator="|" aria-label="breadcrumb" className="text-amber-50">
                    <Image src={"/paimon_nobg.png"} alt={"/paimon.png"} width={40} height={40}></Image>
                    <Typography  className="text-amber-50" >
                        <Link href={"/home"}>
                            Genshin-wiki
                        </Link>
                    </Typography >
                    <Link href={"/home"}>
                        <Typography  className="text-amber-50">Home</Typography >
                    </Link>
                </Breadcrumbs>

            </div>
        </header>
    )
}