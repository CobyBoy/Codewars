export function duplicateCount (text :string): number {
    let uniques = new Set();

    for (const letter of text.toLowerCase()) {
        if (text.toLowerCase().split(letter).length > 2) {
           uniques.add(letter)
       }
    }
    return uniques.size;
}