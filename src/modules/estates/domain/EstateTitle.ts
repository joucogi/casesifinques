export class EstateTitle {
    static readonly MAX_ESTATE_LENGTH = 40;

    constructor(readonly value: string) {
        if (!EstateTitle.isValid(value)) {
            throw new Error(EstateTitle.invalidMessage(value));
        }
    }

    private static isValid(value: string): boolean {
        return value.length <= EstateTitle.MAX_ESTATE_LENGTH;
    }

    private static invalidMessage(value: string): string {
        return `The title [${value}] is too long. ${EstateTitle.MAX_ESTATE_LENGTH} chars is the max allowed`;
    }
}