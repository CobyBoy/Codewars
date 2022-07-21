export function reverseWords(str: string) {
    return str.split(" ").reverse().join(' ')// reverse those words
}

console.log(reverseWords("hello world!"))
console.log(reverseWords("yoda doesn't speak like this"))
console.log(reverseWords("foobar"))
console.log(reverseWords("kata editor"))
console.log(reverseWords("row row row your boat"))

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

