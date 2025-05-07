// Generic class
// Передаём T, S - как индентефикаторы
class User<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    }

    // Generic метод
    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== "string") {
            return `I have only name: ${this.name}`;
        } else {
            return `${this.name} ${surname}`;
        }
    }
}

// Generic class с фиксированными типами данных string и number
class AdminUser<T> extends User<string, number> {
    // rules: T;
    // constructor(parameters) {}
}

const tamerlan = new User("Tamerlan", 30); // string - number
console.log(tamerlan.sayMyFullName("Smith")); // Вывод в консоль

const nameData = "John"; // string
const ageData = 54; // number

// Фиксируем типы данных string и number
const john = new User<string, number>(nameData, ageData);
