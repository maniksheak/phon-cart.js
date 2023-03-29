
// step-1

function updateCaseNumber(isIncrease) {
   const caseNumberField = document.getElementById('countCase');
   const caseNumberString = caseNumberField.value;
   const previousCaseNumber = parseInt(caseNumberString);

   let newCaseNumber;

   if (isIncrease === true) {
      newCaseNumber = previousCaseNumber + 1;
   } else {
      newCaseNumber = previousCaseNumber - 1;
   }

   // caseNumberField.value = newCaseNumber;

   return newCaseNumber;
};

 function updateCaseTotal(newCaseNumber) {
   const caseTotalPrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('balanceCase');
   caseTotalElement.innerText = caseTotalPrice;
};

document.getElementById('plusBtnCase').addEventListener('click', function () {
   const newCaseNumber = updateCaseNumber(true);

    updateCaseTotal(newCaseNumber);

    calculateSubTotal();
});


document.getElementById('minusBtnCase').addEventListener('click', function () {

   const newCaseNumber = updateCaseNumber(false);

   updateCaseTotal(newCaseNumber);

   calculateSubTotal();

});