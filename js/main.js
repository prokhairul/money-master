document.getElementById('calculate').addEventListener('click', function () {

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