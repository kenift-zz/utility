import {Exception} from "@kenift/exception";

export function getDifferenceBetweenNumbers(num1: number, num2: number) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  } else {
    throw Exception.error("Utility", "getDifferenceBetweenNumbers method parameters should be a number type");
  }
}
