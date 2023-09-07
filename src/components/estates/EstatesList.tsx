"use client";

import {Button} from "flowbite-react"

import {Estate} from "../../modules/estates/domain/Estate";
import React from "react";
import {Primitives} from "@codelytv/primitives-type";

export function EstatesList({ estatesPrimitives }: {estatesPrimitives: Primitives<Estate>[]}) {
    const estates: Estate[] = estatesPrimitives.map((primitives: Primitives<Estate>) => Estate.create(primitives));

    return (
        <section>
            <h2>Current estates</h2>
            <div className="grid gap-4 grid-cols-4">
                {estates.map((estate: Estate) => (
                    <a key={estate.idValue()} href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{estate.titleValue()}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                ))}
            </div>
        </section>
    );
}