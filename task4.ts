// Написать функцию, которая возвращает объект в виде ключ (элемент массива) и значение (сколько раз элемент повторяется)

// const array: string[] = ["orange", "apple", "banana", "apple", "orange", "orange"];

// //const result: Record<string, number> = { orange: 3, apple: 2, banana: 1 };

// function parseArray<T extends numbers | string>(arr: T[]) {
//   const result = {} as Record<T, number>;
//   for (const value of arr) {
//     if (result[value]) {
//       result[value]++;
//     } else {
//       result[value] = 1;
//     }
//   }
//   return result;
// }
// console.log(parseArray(4, 7, 6, 4, 7));
