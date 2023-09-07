import {EstateId} from "./EstateId";
import {Estate} from "./Estate";

export interface EstateRepository {
    get(id: EstateId): Promise<Estate | null>;

    getAll(): Promise<Estate[]>;
}