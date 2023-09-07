import Image from "next/image";
import React from "react";
import Logo from "@/components/layout/Logo";

export default function TopHeader () {
    return (
        <div className="container mx-auto py-6 flex flex-row items-center gap-4">
            <Logo />
            <span className="font-sans font-light text-3xl">Cases i Finques</span>
            <p className="flex flex-row ml-4 pl-4 py-2.5 border-l-2 gap-4">
                <Image src="/images/api-logo.png" alt="Cases i Finques" width={75} height={75} />
                <span>Aicat 6402 - api col·legiat núm. 1000</span>
            </p>
        </div>
    )
}