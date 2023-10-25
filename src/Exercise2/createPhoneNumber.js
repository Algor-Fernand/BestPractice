const firstNumbers = (numbers) => numbers.slice(0, 3).join("");
const secondNumbers = (numbers) => numbers.slice(3, 6).join("");
const lastNumbers = (numbers) => numbers.slice(6).join("");

function createPhoneNumber(numbers) {
  return `(${firstNumbers(numbers)}) ${secondNumbers(numbers)}-${lastNumbers(
    numbers
  )}`;
}
//test
createPhoneNumber([0, 7, 9, 4, 5, 6, 7, 8, 9, 0]);
