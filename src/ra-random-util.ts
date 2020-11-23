
class RandomUtil {
    static nextRandomNumber(): number {
        return Math.floor((Math.random() * Number.MAX_VALUE) + 1);
    }
    static nextRandomNumber(upperBound: number): number {
        return Math.floor((Math.random() * upperBound) + 1);
    }
    static nextRandomNumber(lowerBound: number, upperbound: number): number {
        return Math.floor((Math.random() * upperBound) + lowerBound);
    }
}

export default RandomUtil;