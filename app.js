const defaultResult = '';
let currentResult = defaultResult;
let logEntries = [];

// Gets input form input field
function getUserNumberInput(){
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWhriteOutput(operator, resultBeforeCalc, calcNumber){
  const descripton = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, descripton );
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

// if function logic
function calculateRusult(calculationType){
  const enterNumber = getUserNumberInput();
  if(
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enterNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === 'ADD'){
    currentResult += enterNumber;
    mathOperator = '+';
  } else if(calculationType === 'SUBTRACT'){
    currentResult -= enterNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY'){
    currentResult *= enterNumber
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE'){
    currentResult /= enterNumber;
    mathOperator = '/';
  }


  createAndWhriteOutput(mathOperator, initialResult, enterNumber);
  writeToLog(calculationType, initialResult, enterNumber, currentResult);
}

// + CALL function
function add(){
  calculateRusult('ADD');
}

// - CALL function
function subtract(){
  calculateRusult('SUBTRACT');
}

// * CALL function
function multiply(){
  calculateRusult('MULTIPLY');
}

// / CALL function
function divide(){
  calculateRusult('DIVIDE');
}

//  communicate the event with the functions
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
