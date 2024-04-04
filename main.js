#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("\n\n\t\tWelcome to my To-DOs App");
while (condition === true) {
    let toDosTask = await inquirer.prompt([
        {
            name: "question",
            message: "\nWhat would you like to add in your To-Dos List ?",
            type: "input"
        },
        {
            name: "addMoreTasks",
            message: "\nDo you want to add more Tasks in your To-Dos list ?",
            type: 'confirm',
            default: true
        }
    ]);
    todos.push(toDosTask.question);
    console.log(todos);
    condition = toDosTask.addMoreTasks;
}
