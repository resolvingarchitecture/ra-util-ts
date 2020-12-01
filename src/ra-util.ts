// RA Util
export class RandomUtil {
    static nextRandomNumber(): number {
        return Math.floor((Math.random() * Number.MAX_VALUE) + 1);
    }
    static nextRandomNumberUpperBounded(upperBound: number): number {
        return Math.floor((Math.random() * upperBound) + 1);
    }
    static nextRandomNumberLowerAndUpperBounded(lowerBound: number, upperBound: number): number {
        return Math.floor((Math.random() * upperBound) + lowerBound);
    }
}
