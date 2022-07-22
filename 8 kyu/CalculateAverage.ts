export function findAverage(array: number[]): number {
    return array.reduce((acc, val) => acc + val, 0) / array.length || 0
}

/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */
