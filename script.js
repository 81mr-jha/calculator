let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let historyPanel = document.getElementById('historyPanel');
let resultDisplayed = false; 

function appendToDisplay(value) {
    if (display.value === '0' || resultDisplayed) {
        display.value = value;
        resultDisplayed = false;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
    resultDisplayed = false;
}

function clearEntry() {
    display.value = display.value.slice(0, -1) || '0';
    resultDisplayed = false;
}

function calculateResult() {
    try {
        if (display.value === '') return;
        let result = eval(display.value);
        if (isNaN(result)) {
            display.value = 'Error';
        } else {
            addHistory(display.value + ' = ' + result);
            display.value = result;
            resultDisplayed = true;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function addHistory(entry) {
    let li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
}

function toggleHistory() {
    if (historyPanel.style.display === 'none' || historyPanel.style.display === '') {
        historyPanel.style.display = 'block';
    } else {
        historyPanel.style.display = 'none';
    }
}

function clearHistory() {
    historyList.innerHTML = '';
}
