// TODO: Include packages needed for this application
// const ids = require('spdx-license-ids');            future input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        default: true
    },
    {
        type: 'input',
        name: 'paragraph',
        message: 'Please enter a paragraph about your project:',
        when: ({full}) => {
            if (!full) {
                paragraph = ` `;
                return false; 
                
            } else return true;
        }
    },
    
        {
            type: 'input',
            name: 'sectionInstall',
            message: 'Enter paragraph describing installation: ',
            
        },
    
    {
            type: 'input',
            name: 'sectionUsage',
            message: 'Enter a paragraph describing usage: ',
            
    },
    
    {
            type: 'input',
            name: 'sectionCredit',
            message: 'Enter a participant or contributor: ',
            
    },
    {
        type: 'list',
        name: 'License',
        message: 'What type of License do you want to add?',
        choices: ['apache-2.0', 'mit', 'bsl-1.0', 'mpl-2.0', 'gpl-3.0', 'no license']
    },
    
    {
        type: 'input',
        name: 'sectionTests',
        message: 'Enter an example of your test: ',
        
    },
    
    {
        type: 'input',
        name: 'gitname',
        message: 'Enter your GitHub username: ',
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub profile URL: ',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
        
    }
];

let title = '';
// TODO: Create a function to write README file
function writeToFile(data) {
    
    return new Promise((resolve, reject) => {
        const fileName = `./README_of_${title}.md`;
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
        title = data.title;
        generateMarkdown(data);
        return writeToFile(content);
    })
    .catch(err => { console.log(err) })
    
