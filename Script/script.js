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

// const findProduct = (arr) => {
//   let product = 1;
//   for (ele of arr) {
//     product = product * ele;
//   }
//   return product;
// };
// console.log(findProduct([2, 3, 4, 5, 6]));

// find sum of element of an array

// const findSum = (arr) => {
//   let sum = 0;
//   for (ele of arr) {
//     sum = sum + ele;
//   }
//   return sum;
// };
// let numbers = [2, 3, 4, 5, 6];
// let result = findSum(numbers);
// console.log(result);

// const findSum = (arr) => {
//   let sum = 0;
//   for (element of arr) {
//     sum = sum + element;
//   }
//   return sum;
// };
// console.log(findSum([2, 4]));

// const findProduct = (arr) => {
//   let product = 1;
//   for (element of arr) {
//     product = product * element;
//   }
//   return product;
// };
// console.log(findProduct([2, 3, 4]));

// // sum of an array using an arrow function

// const findSum = (arr) => {
//   let sum = 0;
//   for (element of arr) {
//     sum = sum + element;
//   }
//   return sum;
// };

// console.log(findSum([10, 20, 30]));

// // WAP to make new array from existing arrays if the ele>2

// const findArr = (arr) => {
//   let newArr = [];
//   for (element of arr) {
//     if (element > 2) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// };
// console.log(findArr([2, 4, 5, 6, 1, 7]));

// const findMultiple = (arr) => {
//   let newArray = [];
//   for (element of arr) {
//     if (element % 5 == 0) {
//     }
//     newArray.push(element);
//   }
//   return product;
// };
// console.log(findMultiple([2]));

// const findArr = (arr) => {
//   let newArr = [];
//   for (element of arr) {
//     if (element > 2) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// };
// console.log(findArr([2, 4, 5, 6, 1, 7]));

// *const findArr = (arr) => {
//   let newArr = [];

//   for (element of arr) {
//     if (element > 2) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// };
// console.log(findArr([1, 2, 3, 4]));

// // find new array from an existing array if the element <10

// const findArray = (arr) => {
//   let newarray = [];
//   for (element of arr) {
//     if (element < 10) {
//       newarray.push(element);
//     }
//   }
//   return newarray;
// };
// console.log(findArray([, 30, 1, 2, 3, 4, 9, 10, 15, 20]));

// find new array from array where in new array all element will be doubled by 2

const arrDouble = (arr) => {
  let newArray = [];
  for (let element of arr) {
    newArray.push(element * 2);
  }
  return newArray;
};
console.log(arrDouble([2, 3, 4]));
