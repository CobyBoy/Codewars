export function isIsogram(str: string) {
    let uniques = new Set();
    str.toLowerCase().split('').forEach(letter => uniques.add(letter))
    return uniques.size == str.length

    // if (str !== "") {
    //     for (const letter of str.toLowerCase()) {
    //         if (str.toLowerCase().split(letter.toLowerCase()).length == 2) { // when letter is found, it splits the word in amount of parts it's been found. When it's 2, it means letter is unique
    //             uniques.add(letter.toLowerCase());
    //         }
    //     }
    //     return uniques.size == strLength; //uniques saves the word with unique letter so if it the word only has uniques letters, it has changed its length 
    // }
    // else {
        
    //     return true
    // }
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

