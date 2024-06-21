class Person {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, socialSecurityNumber: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}
