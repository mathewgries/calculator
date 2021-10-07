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
	// Get the units in the last place. Returns the length for the longer of the two
	// Only used for adding and subtracting
  const num1 = a.indexOf(".") > -1 ? a.length - a.indexOf(".") - 1 : 0;
  const num2 = b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0;
  return num1 >= num2 ? num1 : num2;
}

//========================================================================//

function convertToInt(str, p) {
  let num = parseFloat(str);
	// If decimals, get places.
  const places = str.indexOf(".") > -1 ? str.length - str.indexOf(".") - 1 : 0;

	// If decimal, pad with zeros to match number being added against
	// Only happens for the shorter number of the two numbers
	// Only called in add and subtract functions
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
		// Count ending zeros after decimal and remove
    for (let i = str.length - 1; i >= 0; i--) {
      if (str.charAt(i) === "0") {
        countZeros++;
      } else {
        break;
      }
    }
    if (countZeros > 0) {
			// Remove trailing zeros from final result
			const removeZeros = str.substring(0, str.length - countZeros);
			// If decimal is all that is left, remove that also
			if(removeZeros.indexOf(".") === removeZeros.length - 1){
				return removeZeros.substring(0, removeZeros.indexOf("."))
			}
      return removeZeros
    } else {
			// No trailing zeros found
      return str;
    }
  } else {
		// No decimal in number
    return str;
  }
}
