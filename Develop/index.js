// TODO: Include packages needed for this application
const ids = require('spdx-license-ids');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// console.log(ids);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the Title of your project (Required)',
        validate: titleInput => {
            if (titleInput) {
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
        name: 'full',
        message: 'Would you like to add a Full description of your project?',
        default: false
    },
    {
        type: 'input',
        name: 'paragraph',
        message: 'Please enter a paragraph about your project:',
        when: ({full}) => {
            if (!full) {
                return false;
            } else {
                paragraph = '';
                return true;
            }
        }
    },
    {
        type: 'confirm',
        name: 'Install',
        message: 'Would you like to add a section about "Installation"?',
        default: false
    },
        {
            type: 'input',
            name: 'sectionInstall',
            message: 'Enter paragraph describing installation: ',
            when: ({ Install }) => {
                if (!Install) {
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
        name: 'Usage',
        message: 'Would you like to add a section about "Usage"?',
        default: false
    },
    {
            type: 'input',
            name: 'sectionUsage',
            message: 'Enter a paragraph describing usage: ',
            when: ({ Usage }) => {
                if (!Usage) {
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
        name: 'Credits',
        message: 'Would you like to add a section about "Credits"?',
        default: false
    },
    {
            type: 'input',
            name: 'sectionCredit',
            message: 'Enter a participant or contributor: ',
            when: ({ Credits }) => {
                if (!Credits) {
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
        name: 'License',
        message: 'Would you like to add a section about "License"?',
        default: false
    },
    {
        type: 'input',
        name: 'sectionLicense',
        message: "Enter your project's license here: ",
        when: ({ License }) => {
            if (!License) {
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
        name: 'Tests',
        message: 'Would you like to add a section about "Tests"?',
        default: false
    },
    {
        type: 'input',
        name: 'sectionTests',
        message: 'Enter an example of your test: ',
        when: ({ Tests }) => {
            if (!Tests) {
                sectionTests = [];
                sectionTests.push();                       
                return false;
            } else {
                sectionTests = [];
                return true;
            }
        } 
    }
];

const promptTableofContent = () => {
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
            name: 'Install',
            message: 'Would you like to add a section about "Installation"?',
            default: false
        },
            {
                type: 'input',
                name: 'sectionInstall',
                message: 'Enter paragraph describing installation: ',
                when: ({ Install }) => {
                    if (!Install) {
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
            name: 'Usage',
            message: 'Would you like to add a section about "Usage"?',
            default: false
        },
        {
                type: 'input',
                name: 'sectionUsage',
                message: 'Enter a paragraph describing usage: ',
                when: ({ Usage }) => {
                    if (!Usage) {
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
            name: 'Credits',
            message: 'Would you like to add a section about "Credits"?',
            default: false
        },
        {
                type: 'input',
                name: 'sectionCredit',
                message: 'Enter a participant or contributor: ',
                when: ({ Credits }) => {
                    if (!Credits) {
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
            name: 'License',
            message: 'Would you like to add a section about "License"?',
            default: false
        },
        {
            type: 'input',
            name: 'sectionLicense',
            message: "Enter your project's license here: ",
            when: ({ License }) => {
                if (!License) {
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
            name: 'Tests',
            message: 'Would you like to add a section about "Tests"?',
            default: false
        },
        {
            type: 'input',
            name: 'sectionTests',
            message: 'Enter an example of your test: ',
            when: ({ Tests }) => {
                if (!Tests) {
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
function writeToFile(data) {
    
    return new Promise((resolve, reject) => {
        const fileName = './README.md';
            console.log('this should be the data',data);
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created successfully'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)    
};

// Function call to initialize app
init()
    .then((data) => {
        
        generateMarkdown(data);
        return writeToFile(content);
    })
    .catch(err => { console.log(err) })
    
