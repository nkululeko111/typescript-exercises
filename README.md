# TypeScript Basic Exercises

## Overview

This repository contains solutions for a set of basic TypeScript exercises. The exercises cover variable declarations, type aliases, functions, classes, and a basic calculator implementation. Each section provides an example of how to achieve the specified tasks using TypeScript.

## Exercise List

### Exercise 1: Variable Declarations

1. Declare a variable that holds a string value without explicitly stating its type.
2. Declare a variable that holds a number value and explicitly state its type.
3. Declare a variable that can hold a value of any type.
4. Declare a variable that can hold either a string or a number.

### Exercise 2: Type Aliases

1. Create a type alias for a union type that can be either a string or a boolean.

### Exercise 3: Functions

1. Write a function that takes two numbers as parameters and returns their sum.
2. Write a function that returns a fixed number.
3. Write a function that takes a string and an optional boolean parameter. If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.

### Exercise 4: Classes

1. Create a `Person` class with `name` and `age` properties. Implement a method to return the person's name.
2. Add a private property `socialSecurityNumber` to the `Person` class and a method to get the age.

### Exercise 5: Basic Calculator

Objective: Create a basic calculator class in TypeScript that can perform addition, subtraction, multiplication, and division. The class should include validation to ensure that the inputs are valid numbers and that division by zero is handled correctly.

1. Class Definition:
   - Create a `Calculator` class with methods for addition, subtraction, multiplication, and division.
2. Validation:
   - Implement input validation to ensure the provided values are numbers.
   - Ensure that the division method handles division by zero appropriately.
3. Methods:
   - `add(a: number, b: number): number`
   - `subtract(a: number, b: number): number`
   - `multiply(a: number, b: number): number`
   - `divide(a: number, b: number): number`



## Requirements

- Node.js
- TypeScript

## Installation

1. Install Node.js from [nodejs.org](https://nodejs.org/).
2. Install TypeScript globally using npm:
   
   npm install -g typescript
   

## Compilation

Compile the TypeScript files to JavaScript:

tsc filename.ts

Run the compiled JavaScript file with Node.js:

node filename.js

