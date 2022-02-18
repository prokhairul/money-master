document.getElementById('calculate').addEventListener('click', function () {
    stringValidation();
    EmptyValue();
    const myIncome = getInputValue('myIncome');
    const balanceText = document.getElementById('balance');
    const totalBalanceValue = parseFloat(myIncome);
    const exp1 = getInputValue('exp1');
    const exp2 = getInputValue('exp2');
    const exp3 = getInputValue('exp3');
    const totalExpText = document.getElementById('totalExpenses');
    const totalExp = exp1 + exp2 + exp3;
    totalExpText.innerText = totalExp;
    const balanceValue = totalBalanceValue - totalExp;
    balanceText.innerText = balanceValue;

    document.getElementById('save').addEventListener('click', function () {

        checkEmptyValueForSaving()
        const savePersent = getInputValue('saveAmount');
        const monthlyIncome = getInputValue('myIncome');
        const saveAmount = savePersent / 100;
        const saveAmountMul = saveAmount * monthlyIncome;
        const saveAmountValue = parseFloat(saveAmountMul);
        const value = document.getElementById('savingAmount').innerText = saveAmountValue;
        document.getElementById('remainingBal').innerText = balanceValue - value;
    })
});


function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // inputField.value = '';
    return amountValue;
}


// Error handling Start

// String Validation For Income & Expenses Fields

function stringValidation() {
    const stringError = document.getElementById('myIncome').value;
    const expErrorOne = document.getElementById('exp1').value;
    const expErrorTwo = document.getElementById('exp2').value;
    const expErrorThree = document.getElementById('exp3').value;


    if (parseInt(stringError) < 0 || isNaN(stringError)) {

        document.getElementById('string-check').style.display = 'block';
        document.getElementById('empty-income').style.display = 'none';
        document.getElementById('empty-savings').style.display = 'none';

    }
    else if (parseInt(expErrorOne) < 0 || isNaN(expErrorOne)) {

        document.getElementById('string-check').style.display = 'block';
        document.getElementById('empty-income').style.display = 'none';
        document.getElementById('empty-savings').style.display = 'none';

    }
    else if (parseInt(expErrorTwo) < 0 || isNaN(expErrorTwo)) {

        document.getElementById('string-check').style.display = 'block';
        document.getElementById('empty-income').style.display = 'none';
        document.getElementById('empty-savings').style.display = 'none';

    }

    else if (parseInt(expErrorThree) < 0 || isNaN(expErrorThree)) {

        document.getElementById('string-check').style.display = 'block';
        document.getElementById('empty-income').style.display = 'none';
        document.getElementById('empty-savings').style.display = 'none';

    }

}


// Empty Input Validation 

function EmptyValue() {

    const stringError = document.getElementById('myIncome').value;
    const expErrorOne = document.getElementById('exp1').value;
    const expErrorTwo = document.getElementById('exp2').value;
    const expErrorThree = document.getElementById('exp3').value;

    if (stringError == '' || expErrorOne == '' || expErrorTwo == '' || expErrorThree == '') {

        document.getElementById('empty-income').style.display = 'block';
        document.getElementById('string-check').style.display = 'none';
        document.getElementById('empty-savings').style.display = 'none';

    }
}

// String Validation For Savings Fields

function checkEmptyValueForSaving() {
    const stringError = document.getElementById('saveAmount').value;

    if (stringError == '') {

        document.getElementById('empty-savings').style.display = 'block';
        document.getElementById('empty-income').style.display = 'none';
        document.getElementById('string-check').style.display = 'none';
    }
}

// Error Handling End 