function generateArray(size, min, max, arr = []) {
   if (arr.length < size) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
      generateArray(size, min, max, arr);
   }
   return arr;
}

module.exports = generateArray;
