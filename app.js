#! /usr/bin/env node 

import inquirer from "inquirer";

// Print a welcome message

console.log("\n\tWelcome to cli-calculator\n");

// Asking Question from users through inquirer
let answers = await inquirer.prompt([
    { messagr: "Enter First Number", type: "number", name: "First_Number" },
    { message: "Enter Second Number", type: "number", name: "Second_Number" },
    {
        message: "Select operator to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponention"]
    },
]);
// Conditional statement If Else
if (answers.operators === "Addition") {
    console.log(answers.First_Number + answers.Second_Number);
}
else if (answers.operators === "Subtraction") {
    console.log(answers.First_Number - answers.Second_Number);
}
else if (answers.operators === "Multiplication") {
    console.log(answers.First_Number * answers.Second_Number);
}
else if (answers.operators === "Division") {
    console.log(answers.First_Number / answers.Second_Number);
}
else if (answers.operators === "Modulus") {
    console.log(answers.First_Number % answers.Second_Number);
}
else if (answers.operators === "Exponention") {
    console.log(answers.First_Number ** answers.Second_Number);
}
else
    (console.log("Invalid Input"));
