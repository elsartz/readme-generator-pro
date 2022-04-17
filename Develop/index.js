// TODO: Include packages needed for this application
const ids = require('spdx-license-ids');
const inquirer = require('inquirer');
// console.log(ids);

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

const promptTableofContent = (tableOfContent) => {
    // if (!tableOfContent) {
    //     tableOfContent.content = [];
    // }
    console.log(`
    =============
    Add a Section
    =============
    `);
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to add a section about "Installation"?',
            default: false
        },
            {
                type: 'input',
                name: 'sectionInstall',
                message: 'Enter paragraph describing installation: ',
                when: ({ confirmInstall }) => {
                    if (!confirmInstall) {
                        sectionInstall = [];
                        sectionInstall.push();                       
                        return false;
                    } else {
                        sectionInstall = [];
                        return true;
                    }
                } 
            },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to add a section about "Usage"?',
            default: false
        },
        {
                type: 'input',
                name: 'sectionUsage',
                message: 'Enter a paragraph describing usage: ',
                when: ({ confirmUsage }) => {
                    if (!confirmUsage) {
                        sectionUsage = [];
                        sectionUsage.push();                       
                        return false;
                    } else {
                        sectionUsage = [];
                        return true;
                    }
                } 
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to add a section about "Credits"?',
            default: false
        },
        {
                type: 'input',
                name: 'sectionCredit',
                message: 'Enter a participant or contributor: ',
                when: ({ confirmCredits }) => {
                    if (!confirmCredits) {
                        sectionCredit = [];
                        sectionCredit.push();                       
                        return false;
                    } else {
                        sectionCredit = [];
                        return true;
                    }
                } 
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a section about "License"?',
            default: false
        },
        {
            type: 'input',
            name: 'sectionLicense',
            message: "Enter your project's license here: ",
            when: ({ confirmLicense }) => {
                if (!confirmLicense) {
                    sectionLicense = [];
                    sectionLicense.push();                       
                    return false;
                } else {
                    sectionLicense = [];
                    return true;
                }
            } 
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add a section about "Tests"?',
            default: false
        },
        {
            type: 'input',
            name: 'sectionTests',
            message: 'Enter an example of your test: ',
            when: ({ confirmTests }) => {
                if (!confirmTests) {
                    sectionTests = [];
                    sectionTests.push();                       
                    return false;
                } else {
                    sectionTests = [];
                    return true;
                }
            } 
        }
        
    ])
    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers));
    })
    .then(promptTableofContent)
    .then((tableOfContent) => {
        console.log(JSON.stringify(tableOfContent))
})
}

// Function call to initialize app
init()
    
