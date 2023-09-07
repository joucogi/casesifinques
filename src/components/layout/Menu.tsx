import Link from "next/link";
import React from "react";
import {getDictionary} from "@/dictionaries/dictionaries";

export default async function Menu({lang}: {lang: string }) {
   const dictionary: Promise<any> = await getDictionary(lang || 'ca');

    return (
        <div className="bg-menu">
            <div className="container mx-auto py-6 flex flex-row justify-between gap-4">
                <nav className="flex flex-row items-center gap-4 text-white">
                    <Link href="/">{dictionary.menu.home}</Link>
                    <Link href="/contacte">{dictionary.menu.contact}</Link>
                </nav>
                <div>
                    <Link href="/">Español</Link>
                </div>
            </div>
        </div>
    )
}