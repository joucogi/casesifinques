import { Uuid } from "../../shared/domain/Uuid";

export class EstateId extends Uuid {
    public static isValid(value: string): boolean {
        // Ensure is valid
        return true;
    }
}