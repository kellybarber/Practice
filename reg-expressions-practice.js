let re1 = new RegExp("abc")
let re2 = /abc/

console.log(re1);

console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true
