// How Many Days Between Two Dates (JavaScript)
// Create a function that takes two dates and returns the number of days between the first and second date.
// Examples
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6
const date1case1 = new Date("June 14, 2019");
const date2case1 = new Date("June 20, 2019");
// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
const date1case2 = new Date("December 29, 2018");
const date2case2 = new Date("January 1, 2019");
// // Dates may not all be in the same month/year.
// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10
const date1case3 = new Date("July 20, 2019");
const date2case3 = new Date("July 30, 2019");



function DateDiff(date1,date2) {
    return ((Math.abs(date1.getTime() - date2.getTime())) / 86400000);
}

// Tests

console.assert(6 === DateDiff(date1case1,date2case1), "Test 1 fails!");
console.assert(3 === DateDiff(date1case2,date2case2), "Test 2 fails!");
console.assert(10 === DateDiff(date1case3,date2case3), "Test 3 fails!");