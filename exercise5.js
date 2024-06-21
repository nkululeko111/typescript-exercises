var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateUserInput = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("numbers only!");
        }
    };
    // Method for addition
    Calculator.prototype.add = function (a, b) {
        this.validateUserInput(a, b);
        return a + b;
    };
    // Method for subtraction
    Calculator.prototype.subtract = function (a, b) {
        this.validateUserInput(a, b);
        return a - b;
    };
    // Method for multiplication
    Calculator.prototype.multiply = function (a, b) {
        this.validateUserInput(a, b);
        return a * b;
    };
    // Method for division with handling division by zero
    Calculator.prototype.divide = function (a, b) {
        this.validateUserInput(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    };
    return Calculator;
}());
