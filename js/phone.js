
// step-1

function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('countMobile');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
 
    let newPhoneNumber;
 
    if (isIncrease === true) {
       newPhoneNumber = previousPhoneNumber + 1;
    } else {
       newPhoneNumber = previousPhoneNumber - 1;
    }
 
    // caseNumberField.value = newCaseNumber;
 
    return newPhoneNumber;
 };
 
 function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('countMobile');
    phoneTotalElement.innerText = phoneTotalPrice;
 };
 
 function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
 };
 
 function calculateSubTotal() {
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
 
    const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
 };
 
 document.getElementById('plusBtnMobile').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
 
     updatePhoneTotalPrice(newPhoneNumber);
 
      calculateSubTotal();
 
 });
 
 
 document.getElementById('minusBtnMobile').addEventListener('click', function () {
 
    const newPhoneNumber = updatePhoneNumber(false);
 
     updatePhoneTotalPrice(newPhoneNumber);
 
     calculateSubTotal();
 
 });