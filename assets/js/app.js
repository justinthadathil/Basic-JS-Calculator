const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];


function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
    const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
    outputResult(currentResult, calDescription);
}

function operationLog(operationIdentifier, preNum, userNum, totalNum){
    let logEntry ={
        operation: operationIdentifier,
        previousNumber: preNum,
        number: userNum,
        total: totalNum
    };
    logEnteries.push(logEntry);
    console.log(logEntry);
}

function add() {
    const initalResult = currentResult;
    const getUserInput = parseInt(userInput.value);
    currentResult += getUserInput;
    createAndWriteOutput('+', initalResult, getUserInput);
    operationLog('ADD', initalResult, getUserInput ,currentResult);
}

function sub(){
    const initalResult = currentResult;
    const getUserInput = parseInt(userInput.value);
    currentResult -= getUserInput;
    createAndWriteOutput('-', initalResult, getUserInput);
    operationLog('SUB', initalResult, getUserInput ,currentResult);
}

function multiply(){
    const initalResult = currentResult;
    const getUserInput = parseInt(userInput.value);
    currentResult *= getUserInput;
    createAndWriteOutput('*', initalResult, getUserInput);
    operationLog('MUL', initalResult, getUserInput ,currentResult);
}

function divide(){
    const initalResult = currentResult;
    const getUserInput = parseInt(userInput.value);
    currentResult /= getUserInput;
    createAndWriteOutput('/', initalResult, getUserInput);
    operationLog('DIV', initalResult, getUserInput ,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



