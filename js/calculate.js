// get the element of expenses

function foodCostField() {
  // calculate food value
  const foodCostField = document.getElementById("food-field");
  const foodCostString = foodCostField.value;
  const foodCost = parseFloat(foodCostString);
  //   console.log(foodCost);
  foodCostField.value = "";
  if (isNaN(foodCost)) {
    alert("Must input numbers");
    return false;
  } else if (Math.sign(foodCost) === -1) {
    alert("Must Input Positive Number");
    return true;
  }

  return foodCost;
}

function rentCostField() {
  // calculate rent
  const rentCostField = document.getElementById("rent-field");
  const rentCostString = rentCostField.value;
  const rentCost = parseFloat(rentCostString);
  rentCostField.value = "";
  if (isNaN(rentCost)) {
    alert("Must input numbers");
    return false;
  } else if (Math.sign(rentCost) === -1) {
    alert("Must Input Positive Number");
    return true;
  }

  return rentCost;
}
function clothesCostField() {
  // calculate colthes
  const clothesCostField = document.getElementById("clothes-field");
  const clothesCostString = clothesCostField.value;
  const clothesCost = parseFloat(clothesCostString);
  clothesCostField.value = "";
  if (isNaN(clothesCost)) {
    alert("Must input numbers");
    return false;
  } else if (Math.sign(clothesCost) === -1) {
    alert("Must Input Positive Number");
    return true;
  }

  return clothesCost;
}
function totalExpensesElement() {
  const expenseCost = document.getElementById("Total-expenses");
  const expenseCostString = expenseCost.innerText;
  const previousExpenseCost = parseFloat(expenseCostString);

  //   expenseCost.innerText = totalExpenses;
  return previousExpenseCost;
}
function totalIncomeField() {
  const incomefield = document.getElementById("income-input-field");
  const totalIncomeString = incomefield.value;
  const totalIncome = parseFloat(totalIncomeString);
  incomefield.value = "";
  if (isNaN(totalIncome)) {
    alert("Must input numbers");
    return false;
  } else if (Math.sign(totalIncome) === -1) {
    alert("Must Input Positive Number");
    return true;
  }

  //   console.log(totalIncome);
  return totalIncome;
}
function totalRemainigBalance() {
  const balanceTotal = document.getElementById("Remaining-balance");
  const balanceTotalString = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalString);

  return previousBalanceTotal;
}

function savingAmount() {
  const saveAmount = document.getElementById("saving-Amount");
  const saveAmountString = saveAmount.innerText;
  const PreviousSaveAmount = parseFloat(saveAmountString);
  return PreviousSaveAmount;
}
function updateRemainingBalance() {
  const restOfTheBalanceElement = document.getElementById("restof-balance");
  const restOfTheBalanceString = restOfTheBalanceElement.innerText;
  const previousRestOfTheBalanceTotal = parseFloat(restOfTheBalanceString);
  return previousRestOfTheBalanceTotal;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
document
  .getElementById("expense-calculate")
  .addEventListener("click", function () {
    // console.log("calculate btn click");
    const foodTotalCost = foodCostField();
    const rentTotalCost = rentCostField();
    const colthesTotalCost = clothesCostField();
    const totalIncomeBalance = totalIncomeField();

    const totalExpensesBalance = totalExpensesElement();
    const totalRemainigAmount = totalRemainigBalance();
    const totalSavingAmount = savingAmount();

    // total expenses calculation
    const totalAllExpenses = colthesTotalCost + rentTotalCost + foodTotalCost;
    if (totalIncomeBalance < totalAllExpenses) {
      alert("your income is not to buy this");
      return;
    }
    setTextElementValueById("Total-expenses", totalAllExpenses);
    // totalExpensesElement().innerText = totalAllExpenses;
    // console.log(totalAllExpenses);

    //remaining balance
    const remainingBalance = totalIncomeBalance - totalAllExpenses;

    setTextElementValueById("Remaining-balance", remainingBalance);

    /*
    // calculate food value
    const foodCostField = document.getElementById("food-field");
    const foodCostString = foodCostField.value;
    const foodCost = parseFloat(foodCostString);
    // console.log(foodCost);
    foodCostField.value = "";

    // calculate rent
    const rentCostField = document.getElementById("rent-field");
    const rentCostString = rentCostField.value;
    const rentCost = parseFloat(rentCostString);
    // console.log(rentCost);
    rentCostField.value = "";

    // calculate colthes
    const clothesCostField = document.getElementById("clothes-field");
    const clothesCostString = clothesCostField.value;
    const clothesCost = parseFloat(clothesCostString);
    // console.log(clothesCost);
    clothesCostField.value = "";



    // total expenses calculation
    const totalAllExpenses = colthesTotalCost + rentTotalCost + foodTotalCost;
    console.log(totalAllExpenses);
   
    //now show the expenses value
    const expenseCost = document.getElementById("Total-expenses");
    const expenseCostString = expenseCost.innerText;
    const previousExpenseCost = parseFloat(expenseCostString);
    expenseCost.innerText = totalExpenses;

    // total income
    const incomefield = document.getElementById("income-input-field");
    const totalIncomeString = incomefield.value;
    const totalIncome = parseFloat(totalIncomeString);
    incomefield.value = "";
    console.log(totalIncome);

    // balance

    const balanceTotal = document.getElementById("Remaining-balance");
    const balanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);

    //remaining balance
    const remainingBalance = totalIncomeBalance - totalExpensesBalance;
    totalRemainigAmount.innerText = remainingBalance;

    const saveAmount = document.getElementById("saving-Amount");
    const saveAmountString = saveAmount.innerText;
    const PreviousSaveAmount = parseFloat(saveAmountString);
    // console.log("value:", PreviousSaveAmount);

    */
  });

//calcuting save balance
document
  .getElementById("btn-save-calculation")
  .addEventListener("click", function () {
    const saveInputField = document.getElementById("percentage-value");
    const saveValuePercentageString = saveInputField.value;
    const saveValuePercentage = parseFloat(saveValuePercentageString);
    saveInputField.value = "";
    if (isNaN(saveValuePercentage)) {
      alert("Must input numbers");
      return false;
    } else if (Math.sign(saveValuePercentage) === -1) {
      alert("Must Input Positive Number");
      return true;
    } else if (saveValuePercentage > 100) {
      alert("your percentage cannot higher than 100");
      return;
    }
    // console.log(saveValuePercentage);

    const totalIncomeBalance = totalIncomeField();
    // calculate total perentage amount
    const savingAmountOfbalance =
      (totalIncomeBalance * saveValuePercentage) / 100;
    if (savingAmountOfbalance > totalIncomeBalance) {
      alert("You cannot saving amount is higher than your income balance ");
    }
    // update save amount
    const totalSavingAmount = savingAmount();
    setTextElementValueById("saving-Amount", savingAmountOfbalance);

    // update remaining balance
    const totalExpensesBalance = totalExpensesElement();
    const restOfTheBalance =
      totalIncomeBalance - (totalExpensesBalance + savingAmountOfbalance);

    setTextElementValueById("restof-balance", restOfTheBalance);

    /*   
    const incomefield = document.getElementById("income-input-field");
    const totalIncomeString = incomefield.value;
    const totalIncome = parseFloat(totalIncomeString);
    incomefield.value = "";

    // calculate total perentage amount
    const savingAmountOfbalance = (totalIncome * saveValuePercentage) / 100;
    // console.log(savingAmount);



    // const saveAmount = document.getElementById("saving-Amount");
    // const saveAmountString = saveAmount.innerText;
    // const PreviousSaveAmount = parseFloat(saveAmountString);
    // console.log("value:", PreviousSaveAmount);
    // saveAmount.innerText = savingAmountOfbalance;

    // update remaining balance
    const restOfTheBalanceElement = document.getElementById("restof-balance");
    const restOfTheBalanceString = restOfTheBalanceElement.innerText;
    const previousRestOfTheBalanceTotal = parseFloat(restOfTheBalanceString);
    console.log(previousRestOfTheBalanceTotal);

    // const restOfTheBalance = totalIncome - (totalExpenses + saveAmount);
    */
  });
