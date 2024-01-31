//Module for linking the shapes.js file for this test
const { Shape, Triangle, Circle, Square } = require('./shapes.js');

//test that runs for a shape, should check to see if the shapes.js file works
describe('Shape', () => {
    //checks for the shapes color
    it('should fill in the color of the shape', () => {
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.color).toEqual('red');
    });
});
//checks if file can make a triangle
describe('Triangle', () => {
    it('should render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        const triangle = `<polygon points="150,50 50,150 250,150" style="fill:blue"/>`;
        expect(shape.render()).toEqual(triangle);
    });
});
//checks if file can make a circle
describe('Circle', () => {
    it('should render a green circle', () => {
        const shape = new Circle();
        shape.setColor('green');
        const circle = `<circle cx="150" cy="100" r="75" style="fill:green"/>`;
        expect(shape.render()).toEqual(circle);
    });
});
//checks if file can make a square
describe('Square', () => {
    it('should render a yellow square', () => {
        const shape = new Square();
        shape.setColor('yellow');
        const square = `<rect x="50" y="50" width="200" height="200" style="fill:yellow"/>`;
        expect(shape.render()).toEqual(square);
    });
});