class Calculator {
   
    private validateUserInput(a: any, b: any): void {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("numbers only!");
        }
    }

    // Method for addition
    add(a: number, b: number): number {
        this.validateUserInput(a, b);
        return a + b;
    }

    // Method for subtraction
    subtract(a: number, b: number): number {
        this.validateUserInput(a, b);
        return a - b;
    }

    // Method for multiplication
    multiply(a: number, b: number): number {
        this.validateUserInput(a, b);
        return a * b;
    }

    // Method for division with handling division by zero
    divide(a: number, b: number): number {
        this.validateUserInput(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}
