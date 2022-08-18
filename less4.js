const todoid1='675ytr-fhf'
const todoid2='679ytr-fhf'

const todoList = [
    {
        id: todoid1,
        title: 'what to learn',
        filter: 'all'
    },
    {id: todoid2,
        title: 'what to buy',
        filter: 'all'
        },
]

const tasks = {
    [todoid1]: [
        {id: 1, title: "js", isDone: false},
        {id: 2, title: "HTML", isDone: false},
        {id: 3, title: "CSS", isDone: false},
    ],
    [todoid2]: [
        {id: 1, title: "bear", isDone: false},
        {id: 2, title: "cola", isDone: false},
        {id: 3, title: "juice", isDone: false},
    ]
}

console.log(tasks[todoid1].find(t=> t.id === 3))
console.log([...tasks[todoid1], {id:4, title:'less', isDone: true}])
console.log(tasks[todoid1].map(t => t.id ===3 ? {...t, isDone:true}:t))
console.log(...todoList[0].id)