function sum(a: number, b: number): number {
    return a + b;
}

function fixedNumber(): number {
    return 20;
}

function formatedString(input: string, isUpperCase?: boolean): string {
    if (isUpperCase) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}
