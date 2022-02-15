// Phone Plus Evevt

document.getElementById('phone-plus').addEventListener('click', function(){

    // Phone Value Incease
    const phoneNumber = document.getElementById('phone-number');
    const phoneNumberText = phoneNumber.value;
    const phoneNumberInt = parseInt(phoneNumberText);
    const phoneValueIncrease = phoneNumberInt + 1;
    const phoneValue = phoneValueIncrease;
    phoneNumber.value = phoneValue;

    // Phone Value Increase With Total
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneValue * 1219;

    // Tatal Account
    calculateTotal();

});


// Phone Minus Event

document.getElementById('phone-minus').addEventListener('click', function(){

    // Phone Value Decrease With Minus
    const phoneNumber = document.getElementById('phone-number');
    const phoneNumberText = phoneNumber.value;
    const phoneNumberInt = parseInt(phoneNumberText);
    const phoneValueDecrease = phoneNumberInt - 1;
    const phoneValue = phoneValueDecrease;
    if(phoneValue > 0){
        phoneNumber.value = phoneValue;

        // Phone Value Decrease With Minus
        const phoneTotal = document.getElementById('phone-total');
        phoneTotal.innerText = phoneValue * 1219;

    }else{
        alert("Sorry!! Number can't be negative");
    }

    // Total Account
    calculateTotal();

});



// Case Evnet Handle

document.getElementById('case-plus').addEventListener('click', function(){

    // Case Value Increase
    const caseNumber = document.getElementById('case-number');
    const caseNumberText = caseNumber.value;
    const caseNumberTextInt = parseInt(caseNumberText);
    const caseNumberIncrease = caseNumberTextInt + 1;
    const caseValue = caseNumberIncrease;
    caseNumber.value = caseValue;

    // Case Increase Total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseValue * 59;

    // Total Account
    calculateTotal();

});

document.getElementById('case-minus').addEventListener('click', function(){

    // Case Value Decrease
    const caseNumber = document.getElementById('case-number');
    const caseNumberText = caseNumber.value;
    const caseNumberTextInt = parseInt(caseNumberText);
    const caseNumberIncrease = caseNumberTextInt - 1;
    const caseValue = caseNumberIncrease;
    if(caseValue > 0){
        caseNumber.value = caseValue;

        // Case Decrease Total
        const caseTotal = document.getElementById('case-total');
        caseTotal.innerText = caseValue * 59;
    }else{
        alert("Sorry!! Number can't be negative");
    }

    // Total Account
    calculateTotal();

});


// Total Function

function calculateTotal(){

    // Phone Value
    const phoneNumber = document.getElementById('phone-number').value;
    const phoneValue = phoneNumber * 1219;

    // Case Value
    const caseNumber = document.getElementById('case-number').value;
    const caseValue = caseNumber * 59;

    // Sub Total
    const subTotal = phoneValue + caseValue;

    // Tax Account
    const tax = subTotal / 10;

    // Total Account
    const total = subTotal + tax;

    // Sub Total Display
    document.getElementById('sub-total').innerText = subTotal;

    // Tax Total Display
    document.getElementById('tax').innerText = tax;

    // Total Display
    document.getElementById('total').innerText = total;
}


// Check Out Button

document.getElementById('check-out').addEventListener('click', function(){

    alert("Thank's for comming our shop.");

})