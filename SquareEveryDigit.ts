// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9**2 is 81 and 1**2 is 1.

// Note: The function accepts an integer and returns an integer

export class Kata {
  static squareDigits(num: number): number {
    // may the code be with you
      return ~~(num.toString().split('').map(n => (~~n)**2).join(''));
  }
}

console.log(Kata.squareDigits(9119));//811181
console.log(Kata.squareDigits(0));//0 