/**
 * Returns the minimum change amount that cannot be generated
 * with the given coins (complexity: O(n·log(n)) ).
 * @param coins Array of positive integers (numbers can be repeated).
 * @returns {number} Minimum change amount that cannot be generated.
 */
export function minNonConstructibleChange(coins) {
    coins.sort((a, b) => parseInt(a) - parseInt(b));
    let coinSum = 0;

    for (let i=0; i < coins.length; i++) {
        if (coins[i] > coinSum + 1) {
            return coinSum + 1;
        }

        coinSum += coins[i];
    }

    return coinSum + 1;
}

/**
 * Returns a new array with the sorted squares of the input numbers.
 * @param integers Sorted array (ascending) of integers (positive or negative).
 * @returns {number[]} Sorted array (ascending) of positive integers.
 */
export function sortedSquares(integers) {
    const result = [];
    let start = 0;
    let end = integers.length - 1;

    while (start <= end) {
        if (Math.abs(integers[start]) > Math.abs(integers[end])) {
            result.push(integers[start]**2);
            start++;
        } else {
            result.push(integers[end]**2);
            end--;
        }
    }

    return result.reverse();
}
