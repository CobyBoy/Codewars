export function reverseWords(str: string) {
    return str.split(" ").reverse().join(' ')// reverse those words
}

console.log(reverseWords("hello world!"))
console.log(reverseWords("yoda doesn't speak like this"))
console.log(reverseWords("foobar"))
console.log(reverseWords("kata editor"))
console.log(reverseWords("row row row your boat"))