function joinStrings(string1, string2) {
  // ES6 feature: template literals
  return `${String(string1)} ${String(string2)}`;
}
//test
console.log(joinStrings("JORDAN", 23));
