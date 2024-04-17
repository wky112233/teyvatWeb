import Link from 'next/link';
import Image from "next/image";
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const links = [
    { name: 'Home', href: '/home', icon: HomeIcon },
];

export default function SideNav() {
    return (
        <div className="flex w-full p-2 md:px-2 bg-gray-200">
            <Link
                className=" flex items-end justify-start rounded-md bg-sky-300 p-2 mr-1"
                href="/"
            >
                <div className="items-center justify-center text-white">
                    <Image src="/transparent_logo.png" alt="Logo" width={50} height={50}>
                    </Image>
                </div>

            </Link>
            <div className="flex grow justify-between">
                {/*<NavLinks />*/}
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center mr-1 justify-center gap-2 rounded-md bg-gray-50 px-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start"
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                        </a>
                    );
                })}
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            </div>
        </div>
    );
}
