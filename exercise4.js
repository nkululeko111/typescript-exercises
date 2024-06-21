var Person = /** @class */ (function () {
    function Person(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
