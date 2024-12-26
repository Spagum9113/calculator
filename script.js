// Get the item to display
const display = document.getElementById('result');

// Get all buttons
const buttons = document.querySelectorAll('.buttons button');

// For the clear button
const clearButton = document.getElementById('clear');

// instructions to show each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.textContent.trim());
    });

});

// instruction to clear for clear button
clearButton.addEventListener('click', () => {
    display.value = '';
});

// event listener for = sign
buttons.forEach(button => {

    if (button.textContent.trim() === '=') {
        button.addEventListener('click', calculateResults);
    }
});




// helper function to handle actual calculations
function calculateResults() {
    let expression = display.value;

    expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/=/, '');


    try {
        const result = eval(expression);  // set result with the evaluated number

        display.value = result;  // display the result
    }

    catch (error) {

        display.value = 'Error!';
    }

};


// Helper function for operators
function appendToDisplay(value) {
    if (['+', '-', '/', '*', '×'].includes(value)) {
        display.value += ` ${value} `;
    }

    else {
        display.value += value;
    }
}



// use the keyboard to type
document.addEventListener('keydown', event => {
    const key = event.key;

    if (!isNaN(key)) {
        display.value += key;
    }

    else if (['+', '-', '/', '*'].includes(key)) {
        appendToDisplay(key);
    }

    else if (key === 'Enter') {
        calculateResults();
    }

    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }

    else if (key === 'Escape') {
        display.value = '';
    }

    else if (key === '.') {
        display.value += '.';
    }



});



console.log('hi');