let  inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./generateMarkdown")

const questions = [

    {
        type: "input",
        message: "What is your user name in Github?",
        name: "username"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, 
{
    type: "input",
    message: "What is your project?",
    name: "title"

}
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
