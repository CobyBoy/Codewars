function getLinesWithCharactersAppearingTwoTimes(wordsArray: string[]): void {
    let uniques = new Set<string>();
    for (const word of wordsArray) {
        for (const letter of word) {
            if (word.toLocaleLowerCase().split(letter).length === 3) {
                uniques.add(word);
            }
        }
    }
    printLines(uniques);
}

function printLines(words: Set<string>): void {
    words.forEach((word) => {
        console.log(word)
    })
}

console.log(getLinesWithCharactersAppearingTwoTimes(['agua', 'sol', 'sool']));