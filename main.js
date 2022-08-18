/*const user ={
    name: 'joe',
    age: 23
}
const userCopy = {...user}

const students = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Donald"},
    {name: "Ann"},
]

console.log(students.map(st => st.name === "Ann" ? {...st, name:"Joe"}: st))// меняем значение Анн на джо возвращаем новый массив. старый не меняется
console.log(students[3].name)

//полная копия
const newArr = students.map(st => ({...st})) // копию полную неизменную делает
const newArr1 = students.map(st => {
    return {...st}
}) // копию полную неизменную делает// вариант строки 18



// деструктуризация массива
const arr = [1,2,3]
//1 variant
const a = arr[0]
const b = arr[1]
const c = arr[2]
// 2 variant

const [x,y,z] = arr


//

const getArray = (a,b,c) =>[a,b,c]
const [a,b,c] = getArray(1,2,4)
*/
/* КОНПСПЕКТ НАТИВКА JS.1

1. Данные в Реакт иммутабельны (не изменяем данные).
state -> copyState -> changeCopyState -> use CopyState with Changes
.

//2. Функции, массивы, и объекты - относятся к типу данных ОБЪЕКТ.
console.log(typeof []);
console.log(typeof {});
console.log(typeof (() => {}))
console.log(Array.isArray([]))
//typeof нужен для определния типа данных в параметрах функции, например.
// В TypeScript эта проблема, в принципе решена.

// 3. Объекты - являются ссылочным типом данных.
// Уточнить у Маши про Литерал Объекта??????
let user = {
    name: "Bob",
    age: 23,
    isStudent: true
}
let user2 = user   // Здесь происходит перезапись user.name  на имя "Alex"
user2.name = "Alex"  // Не произошло создание нового объекта, а перезаписался name у первого

let user2 = {}   // созздаем копию первого объекта
user2.name = user.name // name: "Bob"
user2.age = user.age // age: 23
user2.isStudent = user.isStudent  // isStudent: true

// 4. Spread опреатор
let user2 = {...user} // созздаем копию первого объекта через Spread, аналог кода выше, но современный

let user2 = {...user, age: 24, name: "Alex"} // Мы создали копиб объекта user через Spread, и сразу заменили в нем параметры age и name

// ПОДВОХ!!! У объектов может быть многоуровневая вложенность.
// Копирование есть поверхностное или глубокое(полное), полное с учетом вложенности.

const deepCopyUser = {...user, friends: [...user.friends]} // Здесь произошла глубокая копия, [...user.friends] - создание копии свйоства friend из объекта user.

const students = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Donald"},
    {name: "Ann"}, // copyState -> changeCopyState -> use CopyState with Changes
]
// "Ann" -> "Joe" - студентка Ann решила стать Joe, значит надо сделать копию массива
// Надо пробежаться по массиву найти объект который изменился, сделать его копию и изменить

console.log(students.map(st => st.name === "Ann" ? {...st, name:"Joe"} : st)) // Метод map вернет НОВЫЙ массив с новый именем Joe вместо Ann

const newStudents = students.map(st => {
    return {...st}
})
// 5. Деструктуризация массива - нужен для того что бы закинуть каждый элемент массива в отдельные переменные
const arr = [1,2,3]


let a = arr[0]   Долгая деструктуризация, так делать не надо.
let b = arr[1]
let c = arr[2]


let [a,b,c]= arr   // стандартная деструктуризация, элементы массива arr запишутся в переменные a,b,c

// Как работает то что выше
// let a,b,c
// [a,b,c] = [1,2,3]

const getArray = (a,b,c) => [a,b,c]

const [a,b] = getArray(3,7,5)
console.log(a,b)   // выведет [3, 7]
const sum = a + b // 10
*/

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// const names = ['Bob', 'Alex', 'Nick', 'John']
const studentsNames = (array) => {
    const result = [];
    const getValueForResult = el => el.name;
    for (let i = 0; i < array.length; i++) {
        const newValue = getValueForResult(array[i])
        result[i] = newValue
    }
    return result
}

console.log(studentsNames(students))
// const scores = ['85', '89', '120', '100']
const getScores = (array) => {
    const result = []
    const getValueForResult = el => el.scores;
    for (let i = 0; i < array.length; i++) {
        const newValue = getValueForResult(array[i])
        result[i] = newValue
    }
    return result
}

console.log(getScores(students))

const addScores = (array) => {
    const result = []
    const getValueForResult = el => ({...el, scores: el.scores + 10});
    for (let i = 0; i < array.length; i++) {

        result[i] = getValueForResult(array[i])
    }
    return result
}

console.log(addScores(students))

