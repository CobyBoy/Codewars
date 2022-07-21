// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


export class Kata {
    static validatePin(pin: string): boolean {
        let reg = /^[0-9]*$/;
        return pin.length === 4 || pin.length === 6 ? reg.test(pin): false
    }
}

console.log(Kata.validatePin('1')); //false
console.log(Kata.validatePin('12'));//false
console.log(Kata.validatePin('123'));//false
console.log(Kata.validatePin('12345'));//false
console.log(Kata.validatePin('1234567'));//false
console.log(Kata.validatePin('-1234'));//false
console.log(Kata.validatePin('1.234'));//false
console.log(Kata.validatePin('00000000'));//false
console.log(Kata.validatePin('a234'));//false
console.log(Kata.validatePin('.234'));//false
console.log(Kata.validatePin('1234'));//true
console.log(Kata.validatePin('0000'));//true
console.log(Kata.validatePin('1111'));//true
console.log(Kata.validatePin('123456'));//true
console.log(Kata.validatePin('098765'));//true
console.log(Kata.validatePin('000000'));//true
console.log(Kata.validatePin('123456'));//true
console.log(Kata.validatePin('090909'));//true

console.log(Kata.validatePin('12.0'));//false
console.log(Kata.validatePin('59043G'));//false