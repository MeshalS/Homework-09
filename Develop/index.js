let  inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown")

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

}, 

  {
    type: "input",
    name: "usage",
    message: "please explain the application?"
  },

  {
    type: "input",
    name: "installation",
    message: "explain the installation to the user please  ?",
  },
    


];

// function to write README file
function writeToFile(fileName, data) {
    // if with call back using new if 
    fs.writeFile(fileName, generateMarkdown(data), error => error ? console.log(error) : console.log("this is been created ."));
    
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("ReadME.md", data);
    })
    .catch(err => {
        console.log(err);
    });
};

// function call to initialize program
init();
