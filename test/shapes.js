//Created a class variable for the index file questions. Below will have the creeated shapes for the logo maker

class Shape {
    constructor() {
        //color is a string that is entered in the console terminal
        this.color = '';
    }
    //funtion for filling in the color for each shape
    setColor(color) {
        this.color = color;
    }
}
//returns triangle
class Triangle extends Shape {
    render(){
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
}
//returns circle
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`;
    }
}
//returns square
class Square extends Shape {
    render() {
        return`<rect x="50" y="50" width="200" height="200" style="fill:${this.color}"/>`;
    }
}

//Created the module export to add later into the index file where the questions are

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
};