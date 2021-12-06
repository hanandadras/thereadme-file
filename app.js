//Include pacakges needed
const inquirer = require  ("inquirer");
const fs = require  ("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const utils = require ("utils");

// TODO: Create an array of questions for user input

const questions = [{
    type : "input",
    message : "What is the description of your READme File?",
    name ="Description",
}
{
    type : "input",
    message : "WHat is the table of Contents",
    name ="Table of contents",
}
{
    type : "input",
    message : "WHat does the user need to run this app?",
    name ="Installation",
}
{
    type : "input",
    message : "Give instructions on how to use your app",
    name ="Usage",
}
{
    type : "input",
    message : "Please provide your Licence type",
    name ="Licence",
}
{
    type : "input",
    message : "Give name of persons who contributed to build this app",
    name ="contributing",
}
{
    type : "input",
    message : "which tests are used to run this app?",
    name ="Tests",
}
{
    type : "input",
    message : "What are the READme file questions?",
    name ="Questions",
}
{
    type : "input",
    message : "What is your github username?",
    name ="Github",
}{
    type : "input",
    message : "What is your email?",
    name ="Email",
}
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName);
        console.log(data);
        if (err){
            return console.log(err)
        }
            else
            {
                console.log("success");
            } 
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (data){
        writeToFile ("README.md" , generateMarkdown(data));
        console.log(data)
    })
}
// Function call to initialize app
init();