// Тип аргумент T
function processingData<T>(data: T): T {
    // ...

    return data;
}

let res1 = processingData(1); // ВЫВОД: number
let res2 = processingData("1"); // ВЫВОД: "string"

const num = 10;

const res3 = processingData<number>(num); // Тип аргумента number

// Интерфейсы
interface PrintUK {
    design: number;
}

interface PrintES {
    design: string;
}

// Создаем обобщенный интерфейсы "GENERIC"
interface Print<Type> {
    design: Type;
}

// Ссылка на интерфейс Print с типом аргумента string
const somePrint: Print<string> = {
    design: "ten",
};

// Ссылка на интерфейс Print с типом аргумента number
const someOtherPrint: Print<number> = {
    design: 10,
};

// Array<T>;
// RefferalSystem<UserID, UserRefferals>;

// Базовый набор букв в generic
// T U V S P K K/V
