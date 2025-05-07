// built-in generics

// Аннотация Array
const arr1: Array<number> = [1, 2, 3];
// Аннотация number
const arr2: number[] = [1, 2, 3];

// Аннотация ReadonlyArray (массив только для чтения) и string
const roarr: ReadonlyArray<string> = ["abcdef"];
// roarr[0] = "abcd"; // error

// Интерфейс
interface IState {
    // свойство data будет только для чтения (readonly - не изменяемое)
    readonly data: {
        name: string;
    };
    tag?: string; // делаем свойство необязательным
}

// Доп обёретка над IState
const state: Partial<IState> = {
    data: {
        name: "Alex",
    },
};

// Аннотация Required (делает свойство обязательным)
const strictState: Required<IState> = {
    data: {
        name: "Tom",
    },
    tag: "qwerty", // сейчас required
};

// strictState.data = "smth here"; // readonly (нельзя изменить значение)

function action(state: Readonly<IState>) {
    state.data.name = "abcd";
}
