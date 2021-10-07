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
      break;
  }

  return removeTrailingZero(result);
}

//========================================================================//

function add(a, b) {
  const p = getUlps(a, b);
  const num1 = convertToInt(a, p);
  const num2 = convertToInt(b, p);
  const result = num1 + num2;

  return (result / Math.pow(10, p)).toFixed(p);
}

//========================================================================//

function subtract(a, b) {
  const p = getUlps(a, b);
  const num1 = convertToInt(a, p);
  const num2 = convertToInt(b, p);
  const result = num1 - num2;

  return (result / Math.pow(10, p)).toFixed(p);
}

//========================================================================//

function multiply(a, b) {
  const p1 = a.indexOf(".") > -1 ? a.length - a.indexOf(".") - 1 : 0;
  const p2 = b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0;
  return (a * b).toFixed(p1 + p2);
}

//========================================================================//

function divide(a, b) {
  const p1 = a.indexOf(".") > -1 ? a.length - a.indexOf(".") - 1 : 0;
  const p2 = b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0;
  const places = p1 >= p2 ? p1 : p2;

  return (a / b).toFixed(places);
}

//========================================================================//

function getUlps(a, b) {
  const num1 = a.indexOf(".") > -1 ? a.length - a.indexOf(".") - 1 : 0;
  const num2 = b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0;
  return num1 >= num2 ? num1 : num2;
}

//========================================================================//

function convertToInt(str, p) {
  let num = parseFloat(str);
  const places = str.indexOf(".") > -1 ? str.length - str.indexOf(".") - 1 : 0;

  if (places > 0) {
    const padding = places !== p ? p - places : 0;
    const multiplyier = Math.pow(10, places + padding);
    return num * multiplyier;
  } else {
    return num;
  }
}

//========================================================================//

function removeTrailingZero(str) {
  if (str.indexOf(".") > -1) {
    let countZeros = 0;

    for (let i = str.length - 1; i >= 0; i--) {
      if (str.charAt(i) === "0") {
        countZeros++;
      } else {
        break;
      }
    }
    if (countZeros > 0) {
      return str.substring(0, str.length - countZeros);
    } else {
      return str;
    }
  } else {
    return str;
  }
}
