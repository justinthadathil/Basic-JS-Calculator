const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
    const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
    outputResult(currentResult, calDescription);
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
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

    var holder = document.getElementById("demo");
    holder.innerHTML = " ";
	for (var i=0;i<logEnteries.length;i++){	
        holder.innerHTML += "<p>"+logEnteries[i].operation+","+logEnteries[i].previousNumber+","+logEnteries[i].number+","+logEnteries[i].total+"</p>"; 		
	}
}

function calculateResult(calculationType){
    const initalResult = currentResult;
    const getUserInput = parseInt(userInput.value);

    if(!getUserInput){
        return;
    }

    let operator;
    if(calculationType === "ADD"){
        currentResult += getUserInput;
        operator = '+';
    }else if (calculationType === "SUB") {
        currentResult -= getUserInput;
        operator = '-';
    } else if (calculationType === "MUL") {
        currentResult *= getUserInput;
        operator = '*';
    } else if(calculationType === "DIV") {
        currentResult /= getUserInput;
        operator = '/';
    }

    createAndWriteOutput(operator, initalResult, getUserInput);
    operationLog(calculationType, initalResult, getUserInput ,currentResult);
}

function add() {
    calculateResult('ADD');
}

function sub(){
    calculateResult('SUB');
}

function multiply(){
    calculateResult('MUL');
}

function divide(){
    calculateResult('DIV');
}





