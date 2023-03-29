const plusBtnMobile = document.getElementById("plusBtnMobile");
plusBtnMobile.addEventListener("click", function () {
    count("countMobile", "balanceMobile", +1, 1219);
})

const minusBtnMobile = document.getElementById("minusBtnMobile");
minusBtnMobile.addEventListener("click", function () {
    count("countMobile", "balanceMobile", -1, 1219);

})


const plusBtnCase = document.getElementById("plusBtnCase");
plusBtnCase.addEventListener("click", function () {
    count("countCase", "balanceCase", +1, 59);
})

const minusBtnCase = document.getElementById("minusBtnCase");
minusBtnCase.addEventListener("click", function () {
    count("countCase", "balanceCase", -1, 59);
})



// Function for All
function count(productNumber, priceAfterSum, productMultiplier, productPrice) {
    const numberOfProduct = document.getElementById(productNumber).value;

    const productCurrentNumber = parseFloat(numberOfProduct);

    const quantity = productCurrentNumber + productMultiplier;

    document.getElementById(productNumber).value = quantity;

    const productCurrentPrice = productPrice * quantity;

    document.getElementById(priceAfterSum).innerText = productCurrentPrice;

    // Calculation Of Total and SubTotal
    const totalPrice = document.getElementById("sub-total").innerText;
    const total2 = parseFloat(totalPrice);
    const iPhonePrice = document.getElementById("balanceMobile").innerText;
    const iPhoneCurrentPrice = parseFloat(iPhonePrice);
    const casePrice = document.getElementById("balanceCase").innerText;
    const currentCasePrice = parseFloat(casePrice);
    const totalAllPrice = iPhoneCurrentPrice + currentCasePrice;
    document.getElementById("sub-total").innerText = totalAllPrice;
    document.getElementById("total").innerText = totalAllPrice;
}