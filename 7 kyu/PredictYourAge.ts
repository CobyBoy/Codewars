export function predictAge(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number
): number {
    let arr: number[] = [];
    arr.push(age1);
    arr.push(age2);
    arr.push(age3);
    arr.push(age4);
    arr.push(age5);
    arr.push(age6);
    arr.push(age7);
    arr.push(age8);
    return Math.trunc(Math.sqrt(arr.map((n) => n * n).reduce((acc, n) => acc + n, 0))/2);
    
}

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

