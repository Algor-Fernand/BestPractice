function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) return false;
  }
  return num > 1;
}
