function fibonacci(num) {
  let arr = [];
  let num1 = 0;
  let num2 = 1;
  arr.push(num1, num2);
  let next = num1 + num2;
  arr.push(next);
  while (num > arr.length) {
    num1 = num2;
    num2 = next;
    next = num1 + num2;
    arr.push(next);
  }
  return `Fibonnaci sequence up to ${num} numbers : ${arr}`;
}
