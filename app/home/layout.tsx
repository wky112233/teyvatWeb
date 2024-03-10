import React from "react";
import Navbar from "@/app/ui/home/Navbar";
import Header from "@/app/ui/home/header";
import Divider from '@mui/material/Divider';
import StarField from "@/app/ui/home/starField";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
            <div className="flex-col h-screen bg-gray-900 divide-black text-base overflow-y-hidden">
                <StarField></StarField>
                <div className={"flex-none"}>
                    <Header />
                    <Divider className={"border-gray-500"} />
                </div>
                <div className={"h-screen overflow-y-auto"}>
                    <div className={"flex h-full mx-16"}>
                        <Navbar />
                        <div className={"bg-gray-800 flex-1 p-2 text-amber-50 border-r bg-opacity-80 border-gray-400 z-10 overflow-y-auto"}>
                            {children}
                            <div className={"h-[64px]"}></div>
                        </div>
                    </div>
                </div>
            </div>

    )
}