function numberToBinary(num) {
  if (typeof num !== "number") {
    throw new Error(`${num} is not a number`);
  }
  return num < 0
    ? `${num}² is 1${num.toString(2).replace("-", "")}`
    : `${num}² is ${num.toString(2)}`;
}
