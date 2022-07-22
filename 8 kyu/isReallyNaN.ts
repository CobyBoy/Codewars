export function isReallyNaN(val: any): boolean {
  return (
    isNaN(val) && val !== undefined && val !== null && typeof val === 'number'
  );
}


/* I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable! */
