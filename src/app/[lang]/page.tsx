import React from "react";
import {ApiEstateRepository, estates} from "@/modules/estates/infrastructure/ApiEstateRepository"
import {AllEstatesGetter} from "@/modules/estates/application/AllEstatesGetter";
import {EstatesList} from "@/components/estates/EstatesList";

export default async function Home() {
    const repository: ApiEstateRepository = new ApiEstateRepository();
    const getter: AllEstatesGetter = new AllEstatesGetter(repository)

    return (
        <>
            <EstatesList estatesPrimitives={estates}/>
        </>
  )
}
