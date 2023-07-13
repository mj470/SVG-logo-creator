class LogoShape {
    constructor() {
        this.color = 'black';
        this.lineWidth = 1;
    }

    setColor(color) {
        this.color = color;
    }

    setLinWidth(width) {
        this.lineWidth = width;
    }

    draw() {

    }
}

// Cicle class
class CircleLogo extends LogoShape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
 draw () {
    console.log(`Drawing a circle with a radius ${this.radius}`);
    console.log(`Color: ${this.color}`);
    console.log(`line Wideth: ${this.lineWidth}`);
 }   
}

// Triangle Class
class TriangleLogo extends LogoShape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
draw() {
    console.log(`Drawing a traiangle with base ${this.base} and height ${this.height}`);
    console.log(`Color: ${this.color}`);
    console.log(`Line Width: ${this.lineWidth}`);
}
}

// Square Class
class SquareLogo extends LogoShape {
    constructor(sideLength) {
        super();
        this.sidelength= sideLength;
    }
   draw() {
    console.log(`Drawing a square with side length ${this.sideLength}`);
    console.log(`Color: ${this.color}`);
    console.log(`Line Wideth: ${this.lineWidth}`);
   } 
}