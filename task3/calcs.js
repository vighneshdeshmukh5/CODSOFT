// Get the display element
var display = document.getElementById('display');

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character in the display
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression
function calculateResult() {
    try {
        // Use the eval function to calculate the result of the expression
        display.value = eval(display.value);
    } catch (error) {
        // Handle errors, for example, if the expression is not valid
        display.value = 'Error';
    }
}
