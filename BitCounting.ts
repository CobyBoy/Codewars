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