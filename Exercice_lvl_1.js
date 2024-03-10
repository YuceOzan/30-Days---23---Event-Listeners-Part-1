const title = document.getElementById("title");
title.textContent = "Number Generator";

const subtitle = document.getElementById("subtitle");
subtitle.textContent = "30DaysOfJavascript: DOM Day 3";

const subsubtitle = document.getElementById("subsubtitle");
subsubtitle.textContent = "Author: Asabeneh Yetayeh";

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function generateNumbers(num) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= num; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        div.classList.add('number');

        if (i % 2 === 0) {
            div.classList.add('green');
        } else {
            div.classList.add('yellow');
        }

        if (isPrime(i)) {
            div.classList.remove('green', 'yellow');
            div.classList.add('red');
        }

        container.appendChild(div);
    }
}

document.getElementById("button").addEventListener("click", function() {
    const inputField = document.getElementById("input");
    const userInput = inputField.value.trim(); // Remove leading and trailing whitespace

    // Check if the user input is a valid number
    if (!userInput || isNaN(userInput)) {
        // Display a warning message if the input is not a number
        alert("Please enter a valid number!");
        return; // Exit the function early
    }

    const numberOfDivs = parseInt(userInput);
    generateNumbers(numberOfDivs);
});