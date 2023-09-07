import Image from "next/image";
import React from "react";

export default function Slide() {
    return (
        <div className="relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[url('/images/overlay.png')] after:border-b-8 after:border-b-black">
            <Image
                src="/images/girona.jpeg"
                className="mr-3 w-full"
                alt="Flowbite Logo"
                width={1080}
                height={270}
            />
        </div>
    )
}