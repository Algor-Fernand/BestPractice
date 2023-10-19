const romanToNumerals = (roman) => {
  const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let number = 0;

  for (let i = 0; i < roman.length; i++) {
    const numeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];
    number = numeral < nextNumeral ? (number -= numeral) : (number += numeral);
  }
  return number;
};
//  tests
romanToNumerals("XXI");
romanToNumerals("IV");
