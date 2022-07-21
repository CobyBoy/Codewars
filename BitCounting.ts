export function countBits(n: number) {
  let count = 0;
  while (Math.trunc(n) > 0) {
    if (Math.trunc(n) % 2 == 1) {
      count++;
    }
    n /= 2;
  }
  return count;
}
console.log(countBits(1234))

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
