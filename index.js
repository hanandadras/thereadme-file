//Include pacakges needed
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// const utils = require("./utils");

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title",
    },
    
    
    {
    type: "input",
    message: "What is the description of your READme File?",
    name:"description",
},
{
    type: "input",
    message: "WHat is the table of Contents",
    name :"tableOfContents",
},
{
    type: "input",
    message: "WHat does the user need to run this app?",
    name :"installation",
},
{
    type: "input",
    message: "Give instructions on how to use your app",
    name :"usage",
},
{
    type: "input",
    message: "Please provide your Licence type",
    name : "licence",
},
{
    type: "input",
    message: "Give name of persons who contributed to build this app",
    name : "contributing",
},
{
    type: "input",
    message: "which tests are used to run this app?",
    name : "tests",
},
{
    type: "input",
    message: "What are the READme file questions?",
    name : "questions",
},
{
    type: "input",
    message: "What is your github username?",
    name : "github",
},
{
    type: "input",
    message: "What is your email?",
    name : "email",
},
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        }
        else {
            console.log("success");
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            const template = generateMarkdown(data)
            console.log(data)
            console.log(template)
            writeToFile("output/README.md", generateMarkdown(data));
           
        })
}
// Function call to initialize app
init();