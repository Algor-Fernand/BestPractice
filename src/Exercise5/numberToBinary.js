function numberToBinary(num) {
  if (typeof num !== "number") {
    throw new Error(`${num} is not a number`);
  }
  return num.toString(2);
}
console.log(numberToBinary());
