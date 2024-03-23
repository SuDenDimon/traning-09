// const first = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "один");
// });
// const second = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "два");
// });
// Promise.race([first, second]).then((res) => console.log(res));

// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));
// console.log(5);

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const value = prompt("Enter number");
// function checkValue(value) {
//   return new Promise((resolve, reject) => {
//     const numberValue = Number(value);
//     if (Number.isNaN(numberValue)) {
//       reject("error");
//     };
//     if (numberValue % 2 === 0) {
//       setTimeout(() => resolve("even"), 1000);
//     };
//     if (numberValue % 2 !== 0) {
//       setTimeout(() => resolve("odd"), 2000);
//     };
//   });
// }

// checkValue(value).then(res => console.log(res)).catch(err => console.log(err));