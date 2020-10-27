// installing and requiring node modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//asking user's information
function askingUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title your project?",      
    },
    {
      type: "input",
      name: "description",
      message: "How do you describe the project?",      
    },
    {
      type: "input",
      name: "install",
      message: "How do you install the  project?",      
    },
    {
      type: "input",
      name: "usage",
      message: "What is this for?",      
    },
    {
      type: "input",
      name: "contribution",
      message: "Who will also be working on this?",      
    },
    {
      type: "input",
      name: "test",
      message: "How do you run test on it?",      
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license",
      choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],      
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
      
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      
    },
  ]);
}


// generateReadMe inputs the user information into a readMe format
function writeToFile(res){

    return `
    ![](https://img.shields.io/badge/license-${res.license}-green)
    # **${res.title}**
    ## **Description**
    ${res.description}
    ## Installation Instructions 
    ${res.install}
    ## **Usage** 
    ${res.usage}
    ## **Contributors**
    ${res.contribution}
    ## **Tests** 
    ${res.test}
    ## **Contact Me**
      Any questions, please contact ${res.email}at https://github.com/${res.username}
    This project uses **${res.license}**
    `
    
    }

// function to initialize program
async function init() {

    askingUser()
    .then(function(res) {
      let answers = writeToFile(res) 
      console.log("Your Responses: ", answers);
      fs.writeFileSync("README.md", answers)
    })
  }


// function call to initialize program
init();
