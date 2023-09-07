import { Primitives } from "@codelytv/primitives-type";
import {EstateId} from "./EstateId";
import {EstateTitle} from "./EstateTitle";

export class Estate {
    private constructor(
        readonly id: EstateId,
        readonly title: EstateTitle
    ) {}

    public static create({ id, title }: Primitives<Estate>): Estate {
        return new Estate(new EstateId(id), new EstateTitle(title));
    }

    idValue(): string {
        return this.id.value;
    }

    titleValue(): string {
        return this.title.value;
    }

    toPrimitives(): Primitives<Estate> {
        return {
            id: this.id.value,
            title: this.title.value,
        };
    }
}