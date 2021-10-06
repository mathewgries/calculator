const add = (a, b) => {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  return num1 + num2;
};

const subtract = (a, b) => {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  return num1 - num2;
};

const multiply = (a, b) => {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  return num1 * num2;
};

const divide = (a, b) => {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  return num1 / num2;
};

export default function runOperations(operator, a, b) {
  let result;
  switch (operator) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    default:
      alert("Something went wrong!");
      return;
  }
  return result.toString();
}
