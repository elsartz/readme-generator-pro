// TODO: Include packages needed for this application
const ids = require('spdx-license-ids');
const inquirer = require('inquirer');
// console.log(ids);
// console.log(inquirer);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the Title of your project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;                
            } else {
                console.log('Please enter a Title');
                return false;
            }
        }},
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short Description of your project (Recommended)'
    },
    {
        type: 'confirm',
        name: 'confirmFull',
        message: 'Would you like to add a Full description of your project?',
        default: false
    },
    {
        type: 'input',
        name: 'paragraph',
        message: 'Please enter a paragraph about your project:',
        when: ({confirmFull}) => {
            if (!confirmFull) {
                return false;
            } else {
                return true;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers));
    })
}

// Function call to initialize app
init();
