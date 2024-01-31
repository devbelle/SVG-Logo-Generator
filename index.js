//We need to add the files that are required
const inquirer = require('inquirer');
const fs = require('fs');
//Included the shapes module for the questions
const { Shape, Triangle, Circle, Square } = require('./test/shapes');

//Below are the questions for inputing the shapes
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


//created a prompt for inquier to include the shapes and colors
inquirer.prompt(questions).then((answers) => {
    //destructured class to link to the user answers
    const { text, textColor, shape, shapeColor } = answers;
    //links the created variable with our created shape class
    const shapeObj = new Shape();
    //empty string for user input
    let svgElement = '';
    //sets the color of the shape into the created shape object
    shapeObj.setColor(shapeColor);
    //created a switch statement for each shape of choice. 
    switch (shape){
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            svgElement = square.render();
            break;
    }

    //if statement for choosing either a triangle or square with svg elements
    let x = 150, y = 120;
    if (shape === 'Triangle') {
        y = 135;
    } else if (shape === 'Square') {
        y = 145;
    }
    //production of the final logo, texy and textColor are the user choices int eh prompt above.
    const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${svgElement}
        <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${text}</text>
        </svg>`;
        //creates the file
        fs.writeFileSync('logo.svg', finalSvg);
        //what is written in the console.log
        console.log('Generated logo.svg');
});

