import {minNonConstructibleChange, sortedSquares} from "../src/challenge";

describe('minNonConstructibleChange', () => {
    it('should return 20 when input is [5, 7, 1, 1, 2, 3, 22]', () => {
        const input = [5, 7, 1, 1, 2, 3, 22];
        const expected = 20;
        expect(minNonConstructibleChange(input)).toBe(expected);
    });

    it('should return 6 when input is [1, 1, 1, 1, 1]', () => {
        const input = [1, 1, 1, 1, 1];
        const expected = 6;
        expect(minNonConstructibleChange(input)).toBe(expected);
    });

    it('should return 1 when input is an empty array', () => {
        const input = [];
        const expected = 1;
        expect(minNonConstructibleChange(input)).toBe(expected);
    });
});

describe('sortedSquares', () => {
    it('should return [1, 4, 9, 25, 36, 64, 81] when input is [1, 2, 3, 5, 6, 8, 9]', () => {
        const input = [1, 2, 3, 5, 6, 8, 9];
        const expected = [1, 4, 9, 25, 36, 64, 81];
        expect(sortedSquares(input)).toEqual(expected);
    });

    it('should return  [1, 4] when input is [-2, -1]', () => {
        const input = [-2, -1];
        const expected =  [1, 4];
        expect(sortedSquares(input)).toEqual(expected);
    });

    it('should return [0, 25, 25, 100, 100] when input is [-10, -5, 0, 5, 10]', () => {
        const input = [-10, -5, 0, 5, 10];
        const expected =  [0, 25, 25, 100, 100];
        expect(sortedSquares(input)).toEqual(expected);
    });

    it('should return an empty array when input is an empty array', () => {
        const input = [];
        const expected =  [];
        expect(sortedSquares(input)).toEqual(expected);
    });
});
