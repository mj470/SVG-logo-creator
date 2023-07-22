class LogoShape {
    constructor() {
      this.color = 'black';
      this.lineWidth = 1;
      this.text = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setLineWidth(width) {
      this.lineWidth = width;
    }
  
    setText(text) {
      this.text = text;
    }
  }
  
  // Circle class
  class CircleLogo extends LogoShape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    draw() {
        return `<circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />`;
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
        const halfBase = this.base / 2;
        return `<polygon points="0,${this.height} ${this.base},${this.height} ${halfBase},0" fill="${this.color}" />`;
      }
  }
  
  // Square Class
  class SquareLogo extends LogoShape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    draw() {
        return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
      }
    
  }

  function generateCircleSVG(size, text, textColor, shapeColor) {
    const circle = new CircleLogo(size / 2);
    circle.setColor(shapeColor);
    circle.setText(text);
    return circle.draw();
  }
  
  function generateTriangleSVG(size, text, textColor, shapeColor) {
    const triangle = new TriangleLogo(size, size); // or appropriate base and height values
    triangle.setColor(shapeColor);
    triangle.setText(text);
    return triangle.draw();
  }
  
  function generateSquareSVG(size, text, textColor, shapeColor) {
    const square = new SquareLogo(size);
    square.setColor(shapeColor);
    square.setText(text);
    return square.draw();
  }
  
  module.exports = {
    LogoShape,
    CircleLogo,
    TriangleLogo,
    SquareLogo,
    generateCircleSVG,
    generateTriangleSVG,
    generateSquareSVG,
  };  