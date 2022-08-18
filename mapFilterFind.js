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

const mapFn = (array, callback) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i])
    }
    return result
}
console.log(mapFn(students, el => el.name))
console.log(mapFn(students, el => el.scores))
console.log(mapFn(students, el => ({...el, scores: el.scores + 10})))


const filterFn = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}

console.log(filterFn(students, el => el.age >= 20))
console.log(filterFn(students, el => el.isMarried === false))


const findFn = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return array[i]
        }
    }
}

console.log(findFn(students, el => el.age === 200))
console.log(findFn(students, el => el.isMarried !== false))
