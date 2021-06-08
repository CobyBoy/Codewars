export default function isSquare(n: number): boolean {
    return Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n))
};

console.log(isSquare(-1)) //false index
console.log(isSquare(0)) // true
console.log(isSquare(3)) //false
console.log(isSquare(4)) //true
console.log(isSquare(25)) //true
console.log(isSquare(26))
console.log(isSquare(29699))
console.log(isSquare(24167)) //false
console.log(isSquare(30046))
console.log(isSquare(51253))
