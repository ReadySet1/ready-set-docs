let display = document.getElementById('display');

// Function to safely evaluate mathematical expressions without using eval()
function safeEvaluate(expression) {
    // Create a function to evaluate the expression in a controlled environment
    try {
        // Replace all mathematical functions with their Math equivalent
        const mathFunctions = {
            'sin': Math.sin,
            'cos': Math.cos,
            'tan': Math.tan,
            'log': Math.log10,
            'ln': Math.log,
            'sqrt': Math.sqrt,
            'abs': Math.abs,
            'PI': Math.PI,
            'E': Math.E
        };
        
        // Use Function constructor to create a sandboxed evaluation
        // This is safer than direct eval but still requires careful input validation
        const calculator = new Function(
            ...Object.keys(mathFunctions),
            `"use strict"; 
            return ${expression};`
        );
        
        // Call the function with math functions as arguments
        return calculator(...Object.values(mathFunctions));
    } catch (error) {
        throw new Error('Invalid expression: ' + error.message);
    }
}

function addCharacter(character) {
    display.value += character;
}

function clean() {
    display.value = '';
}

function calculate() {
    try {
        if (!display.value.trim()) {
            throw new Error('Empty expression');
        }
        
        // Replace symbols for safe evaluation
        let expression = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/\^/g, '**')
            .replace(/π/g, 'PI');
            // .replace(/π/g, 'PI');
        
        // Validate input - only allow safe characters
        if (!/^[0-9+\-*/().\s**PIE]+$/.test(expression)) {
            throw new Error('Invalid characters in expression');
        }
        
        const result = safeEvaluate(expression);
        
        // Check if result is valid
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid result');
        }
        
        display.value = result;
    } catch (error) {
        console.error('Calculation error:', error);
        display.value = 'Error: ' + error.message;
        
        // Clear error message after 3 seconds
        setTimeout(() => {
            if (display.value.startsWith('Error: ')) {
                display.value = '';
            }
        }, 3000);
    }
}

// Scientific functions (e.g., sin, cos, sqrt)
function calculateFunction(func) {
    try {
        const value = parseFloat(display.value);
        
        if (isNaN(value)) {
            throw new Error('Invalid input');
        }
        
        let result;
        
        // Handle each function explicitly instead of using eval
        switch (func) {
            case 'Math.sin':
                result = Math.sin(value);
                break;
            case 'Math.cos':
                result = Math.cos(value);
                break;
            case 'Math.tan':
                result = Math.tan(value);
                break;
            case 'Math.sqrt':
                if (value < 0) {
                    throw new Error('Cannot calculate square root of negative number');
                }
                result = Math.sqrt(value);
                break;
            case 'Math.log':
                if (value <= 0) {
                    throw new Error('Cannot calculate logarithm of zero or negative number');
                }
                result = Math.log10(value);
                break;
            case 'Math.ln':
                if (value <= 0) {
                    throw new Error('Cannot calculate natural logarithm of zero or negative number');
                }
                result = Math.log(value);
                break;
            default:
                throw new Error('Unknown function');
        }
        
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid result');
        }
        
        display.value = result;
    } catch (error) {
        console.error('Function error:', error);
        display.value = 'Error: ' + error.message;
        
        // Clear error message after 3 seconds
        setTimeout(() => {
            if (display.value.startsWith('Error: ')) {
                display.value = '';
            }
        }, 3000);
    }
}

function deleteLastNumber() {
    display.value = display.value.slice(0, -1);
}

// Toggle number sign (±)
function toggleSign() {
    if (display.value === '') return;
    
    if (display.value.startsWith('-')) {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

// Square function (x²)
function calculateSquare() {
    try {
        if (display.value === '') return;
        
        const value = parseFloat(display.value);
        
        if (isNaN(value)) {
            throw new Error('Invalid input');
        }
        
        display.value = value * value;
    } catch (error) {
        console.error('Square calculation error:', error);
        display.value = 'Error: ' + error.message;
        
        // Clear error message after 3 seconds
        setTimeout(() => {
            if (display.value.startsWith('Error: ')) {
                display.value = '';
            }
        }, 3000);
    }
}