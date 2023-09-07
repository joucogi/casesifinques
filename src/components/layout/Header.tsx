import React from "react";
import TopHeader from "@/components/layout/TopHeader";
import Slide from "@/components/layout/Slide";
import Menu from "@/components/layout/Menu";

export default function Header({lang}: {lang: string }) {
    return (
        <header>
            <TopHeader />
            <Menu lang={lang} />
            <Slide />
        </header>
    )
}