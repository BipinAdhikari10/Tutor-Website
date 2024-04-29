console.log("hello world");

// find average

// const findAverage = (arr) => {
//   let sum = 0;
//   let average;
//   for (let element of arr) {
//     sum = sum + element;
//   }
//   average = sum / arr.length;
//   return average;
// };
// let numbers = [5, 10, 5, 20];
// let average = findAverage(numbers);
// console.log(average);

// find average using an arrow function

// const findAverage = (arr) => {
//   let sum = 0;
//   let average;
//   for (element of arr) {
//     sum = sum + element;
//   }
//   average = sum / arr.length;
//   return average;
// };
// console.log(findAverage([1, 2, 3, 4, 10]));

const findProduct = (arr) => {
  let product = 1;
  for (ele of arr) {
    product = product * ele;
  }
  return product;
};
console.log(findProduct([2, 3, 4, 5, 6]));

// find sum of element of an array

const findSum = (arr) => {
  let sum = 0;
  for (ele of arr) {
    sum = sum + ele;
  }
  return sum;
};
let numbers = [2, 3, 4, 5, 6];
let result = findSum(numbers);
console.log(result);
