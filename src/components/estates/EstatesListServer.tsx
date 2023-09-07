import {Estate} from "../../modules/estates/domain/Estate";
import {AllEstatesGetter} from "../../modules/estates/application/AllEstatesGetter";
import React from "react";
import {EstatesList} from "@/components/estates/EstatesList";
import {Primitives} from "@codelytv/primitives-type";

export async function EstatesListServer({ getter }: {getter: AllEstatesGetter}) {
    const estates: Estate[] = await getter.get()
    const estatesPrimitives: Primitives<Estate>[] = estates.map((estate: Estate) => estate.toPrimitives());

    return (
        <EstatesList estatesPrimitives={estatesPrimitives}/>
    );
}