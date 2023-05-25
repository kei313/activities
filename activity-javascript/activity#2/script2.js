function maskCardNumber() {
    let cardNumber = document.getElementById("card-number").value;
    if (cardNumber.length < 16) {// error handlinmg
        alert("Card number should be 16 digits long.");
        return;
    }
    if (cardNumber.length > 16) {
        alert("Card number should not exceed 16 digits.");
        return;
    }
    if (isNaN(cardNumber)) {
        alert("Card number should only contain digits.");
        return;
    }
    let maskedCardNumber = cardNumber.slice(0, 4) + " **** **** " + cardNumber.slice(-4); //slice 1st 4 replace 2nd,3rd with **** slice last 4
    document.getElementById("masked-card-number").innerHTML = maskedCardNumber;
    document.getElementById("card-number-label").innerHTML = "Masked card number:";
}

function unmaskCardNumber() {
    let cardNumber = document.getElementById("card-number").value;
    let formattedCardNumber = cardNumber.replace(/(.{4})/g, "$1 "); //output with 4 spaces inbetwn
    document.getElementById("masked-card-number").innerHTML = formattedCardNumber.trim();
    document.getElementById("card-number-label").innerHTML = "Unmasked card number:";
}