function fibonacci(num) {
  const sequence = [0, 1];
  while (num > sequence.length) {
    sequence.push(
      sequence[sequence.length - 2] + sequence[sequence.length - 1]
    );
  }
  return sequence;
}
