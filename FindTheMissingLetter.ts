export function findMissingLetter(array: string[]): string {
    let n: string = 'a';
    console.log(array.toString())
    
    console.log(array.join(''));
   
    for (let index = 0; index < array.length; index++) {
        const element = array.join('').charCodeAt(index);
        console.log(element)
        
    }
    return 'null'
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))