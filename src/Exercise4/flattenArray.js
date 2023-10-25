function arrayDepth(arr) {
  if (!Array.isArray(arr)) return 0;
  let depth = 1;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      depth = arrayDepth(arr[i]) + 1;
    }
  }
  return depth;
}
function flattenArray(arr) {
  return arr.flat(arrayDepth(arr));
}
