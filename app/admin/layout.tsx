import SideNav from '@/app/ui/admin/sidenav';
import {lusitana} from "@/app/ui/fonts";
export default function Layout ({children}: { children: React.ReactNode }) {
    return <main>
        <div className={`${lusitana.className} flex-col h-screen overflow-y-auto bg-gray-50`}>
            <div className="w-full flex-none">
                <SideNav/>
            </div>
            <div className="flex flex-grow h-full rounded-md bg-gray-50 py-4 px-20">{children}</div>
            {/*<div className={"w-full h-[50px] bg-gray-50"}></div>*/}
        </div>
    </main>
}