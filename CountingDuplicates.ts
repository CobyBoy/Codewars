export function duplicateCount (text :string): number {
    let uniques = new Set();

    for (const letter of text.toLowerCase()) {
        if (text.toLowerCase().split(letter).length > 2) {
           uniques.add(letter)
       }
    }
    return uniques.size;
}

function solution(A) {
    console.log(A)
    let result = [];

    for (let i = 0; i < A.length; ++i) {
        if (0 <= A[i]) {
            result[A[i]] = true;
        }
    }

    for (let i = 1; i <= result.length; ++i) {
        if (undefined === result[i]) {
            return i;
        }
    }

    return 1
}

function solutionb(A) {
    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) =>  a - b)
console.log(A)
    let x = 1

    for (let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if (x < A[i]) {
            return x
        }
        console.log(A[i])
        x = A[i] + 1
        console.log(x)
    }

    return x
}


console.log(solution([1, 3, 6, 4, 1, 2]))
console.log(solution([-1, -3]))
console.log(solution([1, 2, 3]))

console.log(solutionb([1, 3, 6, 4, 1, 2]))
console.log(solutionb([-1, -3]))
console.log(solutionb([1, 2, 3]))