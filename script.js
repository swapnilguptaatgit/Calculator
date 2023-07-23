// script2.js

function insertCharacter(char) {
    const display = document.getElementById('inputBox');
    display.value = display.value === '0' ? char : display.value + char;
  }
  
  function clearDisplay() {
    document.getElementById('inputBox').value = '0';
  }
  
  function deleteLastChar() {
    const display = document.getElementById('inputBox');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
      display.value = '0';
    }
  }
  function convertToDollars() {
    const display = document.getElementById('inputBox');
    const rupeesValue = parseFloat(display.value);
    
    if (!isNaN(rupeesValue)) {
      const dollarValue = rupeesValue / 82; // Assuming the exchange rate is 1 USD = 74.5 INR
      display.value = rupeesValue + '₹=' + dollarValue.toFixed(2) + '$'; // Round to 2 decimal places
    } else {
      display.value = 'Error';
    }
}
function convertToEuros() {
  const display = document.getElementById('inputBox');
  const rupeesValue = parseFloat(display.value);
  
  if (!isNaN(rupeesValue)) {
    const euroValue = rupeesValue / 91.25 ; // Assuming the exchange rate is 1 EUR = 94.2 INR
    display.value = rupeesValue + '₹=' + euroValue.toFixed(2) + '€'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
function convertToPounds() {
  const display = document.getElementById('inputBox');
  const rupeesValue = parseFloat(display.value);
  
  if (!isNaN(rupeesValue)) {
    const poundValue = rupeesValue / 105.41; // Assuming the exchange rate is 1 GBP = 104.5 INR
    display.value = rupeesValue + '₹=' + poundValue.toFixed(2) + '£'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}

function convertToYen() {
  const display = document.getElementById('inputBox');
  const rupeesValue = parseFloat(display.value);
  
  if (!isNaN(rupeesValue)) {
    const yenValue = rupeesValue * 1.72 // Assuming the exchange rate is 1 JPY = 1.52 INR
    display.value = rupeesValue + '₹=' + yenValue.toFixed(2) + '¥'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
  function convertToFarhenheit() {
    const display = document.getElementById('inputBox');
    const celsiusValue = parseFloat(display.value);
    
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      display.value = celsiusValue +'°C='+ fahrenheitValue.toFixed(2) + '°F'; // Round to 2 decimal places
    } else {
      display.value = 'Error';
    }
}
function convertToCelsius() {
  const display = document.getElementById('inputBox');
  const fahrenheitValue = parseFloat(display.value);
  
  if (!isNaN(fahrenheitValue)) {
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    display.value = fahrenheitValue +'°F='+ celsiusValue.toFixed(2) + '°C'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
function convertToKelvin() {
  const display = document.getElementById('inputBox');
  const celsiusValue = parseFloat(display.value);
  
  if (!isNaN(celsiusValue)) {
    const kelvinValue = celsiusValue + 273.15;
    display.value = celsiusValue + '°C=' + kelvinValue.toFixed(2) + 'K'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
function convertToRankine() {
  const display = document.getElementById('inputBox');
  const celsiusValue = parseFloat(display.value);
  
  if (!isNaN(celsiusValue)) {
    const rankineValue = (celsiusValue + 273.15) * 9/5;
    display.value = celsiusValue + '°C=' + rankineValue.toFixed(2) + '°R'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}

  function insertFunction(func) {
    const display = document.getElementById('inputBox');
    const functionMap = {
      'sqrt': 'Math.sqrt',
      'log': 'Math.log10',
      'ln': 'Math.log',
      'exp': 'Math.exp',
      'sin': 'Math.sin',
      'cos': 'Math.cos',
      'tan': 'Math.tan',
      'square': 'Math.cbrt',
      
      
    };
    display.value = functionMap[func] + '(' + display.value + ')';
  }
  
  function calculate() {
    const display = document.getElementById('inputBox');
    let expression = display.value;
    try {
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
 