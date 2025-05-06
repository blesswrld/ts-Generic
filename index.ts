// Тип аргумента T, S - где T - принимает массив
function processingData<T, S>(data: T[], options: S): string {
    data.length;
    // Приём сужение типов с помощью switch casов в generic функции
    switch (typeof data) {
        case "string":
            return `${data}, speed: ${options}`;
            break;
        case "number":
            return `${data}, speed: ${options}`;
            break;
        default:
            return "Not valid";
    }
}

let res1 = processingData([1], "fast"); // ВЫВОД: number и string (новый индентефикатор "fast", передаём массив числа)
let res2 = processingData(["1"], "slow"); // ВЫВОД: "string"(передаём массив числа)
const res3 = processingData<number, string>([10], "slow"); // Тип аргумента number и string (передаём массив числа)

// Функция шаблон
// Аннотация функции с помощью generic типов
function processing<T>(data: T): T {
    return data;
}

// Интерфейс типа generic
interface ProcessingFunc {
    <T>(data: T): T;
}

let newFunc: ProcessingFunc = processing;

interface DataSaver {
    // processing: typeof processing; // Запрос типа из функции шаблона
    // Второй вариант с помощью интерфейс типа generic
    processing: ProcessingFunc;
}

// Метод saver
const saver: DataSaver = {
    // Первый вариант
    // processing(data) {
    //     console.log(data);
    //     return data;
    // },

    // Второй вариант
    // processing: <T>(data: T) => {
    //     return data;
    // },

    // Третий вариант с шаблоном
    processing: processing,
};

// Array<T>;
// RefferalSystem<UserID, UserRefferals>;

// Базовый набор букв в generic
// T U V S P K K/V
