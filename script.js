// lab_6.1
// Гринчук Тарас
// Лабораторна робота № 6.1
// Пошук елементів одновимірного масиву ітераційним та рекурсивним способом
// Варіант №4

// Рекурсивний спосіб
function generateArray(size, min, max, arr = []) {
   if (arr.length < size) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      generateArray(size, min, max, arr);
   }
   return arr;
}

function calculateAndReplace(array, i = 0, count = 0, sum = 0) {
   if (i < array.length) {
      if (array[i] <= 0 || i % 2 == 0) {
         count++;
         sum += array[i];
         array[i] = 0;
      }
      return calculateAndReplace(array, i + 1, count, sum);
   } else {
      return { count: count, sum: sum, array: array };
   }
}

let array = generateArray(26, -40, 20);
console.log("Оригінальний масив: " + array.join(", "));
let result = calculateAndReplace(array);
console.log("К-ть елементів, які задов. умову: " + result.count);
console.log("Сума елементів, які задов. умову: " + result.sum);
console.log("Змінений масив: " + result.array.join(", "));
