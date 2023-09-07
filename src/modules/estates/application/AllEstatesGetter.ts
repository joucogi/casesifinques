import {Estate} from "../domain/Estate";
import {EstateRepository} from "../domain/EstateRepository";

export class AllEstatesGetter {
    constructor(private readonly repository: EstateRepository) {}

    async get(): Promise<Estate[]> {
        return await this.repository.getAll();
    }
}