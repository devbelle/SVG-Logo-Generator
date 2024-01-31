//Wee need to add the files that are required
const inquirer = require('inquirer');
const fs = require('fs');

//Below are the questions for inputting the shapes
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What Shape do you want to use?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want inside of the shape (enter up to three charatcers)?',
        
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What should be the color of the text (enter name of color or hashtag)?'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What kind of background color do you want for the shape (enter name of color or hashtag)?'
    },
];
