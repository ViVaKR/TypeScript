"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const data = [
    { id: 1, task: 'TypeScript', complete: true },
    { id: 2, task: 'C#', complete: false },
    { id: 3, task: 'C++', complete: true },
    { id: 4, task: 'ASP.NET', complete: false },
];
console.log('My Todo List');
for (let i = 0; i < data.length; i++) {
    let toto = new TodoItem_1.TodoItem(data[i].id, data[i].task, data[i].complete);
    toto.printDetails();
}
