// Generic Интерфейс
interface ProcessingFunc {
    <T>(daTa: T): T;
}

// Функция шаблон
// Аннотация функции с помощью generic типов
function processing<T>(data: T): T {
    return data;
}

let newFunc: ProcessingFunc = processing;

// Generic Type
type Smth<T> = T;

const num: Smth<number> = 5; // Фиксируем значение для generic type

interface ParentsOfUser {
    mother: string;
    father: string;
}

// Generic Type
// Первый вариант
// type User<T> = {
//     login: T;
//     age: number;
// };

// Второй вариант с интерфейсом (более практичен)
// Наследуем generic-type из интерфейса ParentsOfUser
interface User<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData; // Данные о родителях
}

// Фиксируем значение "str" для свойства login
const user1: User<{ mother: string; father: string; married: boolean }> = {
    login: "str",
    age: 54,
    parents: { mother: "Anna", father: "no data", married: true }, // Передаём строго эти данные
};

// Generic helper-types
// Либо Type либо null (ничего)
type OrNull<Type> = Type | null; // | - Оператор Union-Типа
type OneOrMany<Type> = Type | Type[];

// Передаём массив чисел
const data: OneOrMany<number[]> = [5];

// Generic функция для сужение типов
// Наследуем number - string входящих данных используя Union-тип ( | )
// const depositMoney = <T extends number | string>(amount: T): T => {
//     console.log(`req to server with amount: ${amount}`);
//     return amount;
// };

// depositMoney(500); // number
// depositMoney("500"); // string
// depositMoney(false); // error тк мы не передавали тип данных на приём

// Функция с аннотацией для сужение типов
const depositMoney = (amount: number | string): number | string => {
    console.log(`req to server with amount: ${amount}`);
    return amount;
};

depositMoney(500); // number
depositMoney("500"); // string
depositMoney(false); // error тк мы не передавали тип данных на приём

// Array<T>;
// RefferalSystem<UserID, UserRefferals>;

// Базовый набор букв в generic
// T U V S P K K/V
