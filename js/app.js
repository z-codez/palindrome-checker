const checkButton = document.querySelector("#input-div button");
const inputField = document.querySelector("#input-div input");
const resultDiv = document.getElementById("result");

// Event Listeners

checkButton.addEventListener('click', checkPalindrome);


function checkPalindrome() {
    if (!inputField.value) {
        alert("Please input a value to be checked!");
        return;
    }

    const inputString = inputField.value;
    //
    let formattedString = inputString.toLowerCase()
        // removes all non-alphanumeric characters and '_' character.
        .replace(/\W|_/g, "");
    console.log(formattedString);
    let reversedString = "";

    // Reversing the inputString
    for (let i = formattedString.length - 1; i >= 0; i--) {
        reversedString += formattedString.charAt(i);
    }

    if (formattedString === reversedString) {
        resultDiv.innerText = inputString + " is a palindrome";
    } else {
        resultDiv.innerText = inputString + " is not a palindrome";
    }
}