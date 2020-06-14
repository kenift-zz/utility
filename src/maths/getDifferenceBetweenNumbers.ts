export function getDifferenceBetweenNumbers(num1: number, num2: number) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}
