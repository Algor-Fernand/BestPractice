const numberFormat = function (number) {
  let numberFormatted = 0;
  const arr = Math.abs(number).toString().split("").reverse();
  for (let i = 3; i < arr.length; i += 4) {
    arr.splice(i, 0, ",");
  }
  numberFormatted = arr.reverse().join("");
  return number < 0 ? "-" + numberFormatted : numberFormatted;
};
