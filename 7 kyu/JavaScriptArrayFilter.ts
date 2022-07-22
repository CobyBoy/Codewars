// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

export const getEvenNumbers = (numbersArray: number[]): number[] => {
    return numbersArray.filter((number) => number %2 === 0)
  // filter out the odd numbers
};

console.log(getEvenNumbers([2, 3, 4, 5, 6])) // should == [2,4,6]