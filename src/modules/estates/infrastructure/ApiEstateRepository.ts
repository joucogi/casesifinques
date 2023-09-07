import { Primitives } from "@codelytv/primitives-type";

import { Estate } from "../domain/Estate";
import { EstateId } from "../domain/EstateId";
import { EstateRepository } from "../domain/EstateRepository";

export const estates: Primitives<Estate>[] = [
    {
        "id": "a32735df-0704-4007-99a1-8dcef1050e55",
        "title": "Estate 1"
    },
    {
        "id": "ec4adcc8-6bdf-48d1-bf2f-bd67722cb226",
        "title": "Estate 2"
    },
    {
        "id": "414e1f3b-322f-4e87-997e-169a85ea80c9",
        "title": "Estate 3"
    },
    {
        "id": "8cdd631f-9d8e-467b-93ba-e1623e16b3e9",
        "title": "Estate 4"
    },
    {
        "id": "9b5c2d97-a5d2-431a-a581-3ef62b2eba10",
        "title": "Estate 5"
    }
];

export class ApiEstateRepository implements EstateRepository {
    async get(id: EstateId): Promise<Estate | null> {
        // const course = await fetch(`https://awesome-codely-courses.com/api/courses/${id.value}`).then(
        //     (response) => response.json() as Promise<Primitives<Estate>>
        // );

        const estate: Primitives<Estate> | undefined = estates.find((item: Primitives<Estate>): boolean => item.id === id.value)

        if (estate === undefined) {
            return null;
        }

        return Estate.create(estate);
    }

    async getAll(): Promise<Estate[]> {
        // const courses = await fetch("https://awesome-codely-courses.com/api/courses").then(
        //     (response) => response.json() as Promise<Primitives<Estate>[]>
        // );

        return estates.map((estate: Primitives<Estate>): Estate => Estate.create(estate));
    }
}