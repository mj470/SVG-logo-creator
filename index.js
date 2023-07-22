const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const { generateCircleSVG, generateTriangleSVG, generateSquareSVG } = require('./lib/shapes');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'size',
      message: 'Enter the size for your logo:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter color for the text of your logo:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a logo shape',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter background color for your logo:',
    },
  ])
  .then(answers => {
    const { size, text, textColor, shape, shapeColor } = answers;
    const lowercaseShape = shape.toLowerCase(); // Convert the shape name to lowercase
    writeLogoFile(generateLogoSVG(size, text, textColor, lowercaseShape, shapeColor)); // Pass the lowercase shape to generateLogoSVG
  })
  .catch((err) => {
    console.error(err);
  });

// Function to generate SVG logo based on user input
function generateLogoSVG(size, text, textColor, shape, shapeColor) {
  let shapeElement = '';
  let textElement = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="text-align: center;" fill="${textColor}">${text}</text>`;
  let viewBox = '';
  // Adjust positioning based on the shape type
  switch (shape) {
    case 'circle':
      shapeElement = generateCircleSVG(size / 2, text, textColor, shapeColor);
      viewBox = `0 0 ${size} ${size}`;
      break;
    case 'triangle':
      shapeElement = generateTriangleSVG(size, text, textColor, shapeColor);
      viewBox = `0 0 ${size} ${size * 0.75}`;
      break;
    case 'square':
      shapeElement = generateSquareSVG(size, text, textColor, shapeColor);
      viewBox = `0 0 ${size} ${size}`;
      break;
    default:
      throw new Error(`Unsupported shape: ${shape}`);
  }

  // Calculate the viewBox attribute to ensure the SVG is properly scaled
  
  const svgCode = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}">
    ${shape === 'circle' ? `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${shapeColor}" />` : ''}
    ${shape === 'triangle' ? `<polygon points="0,${size} ${size},${size} ${size / 2},0" fill="${shapeColor}" />` : ''}
    ${shape === 'square' ? `<rect width="${size}" height="${size}" fill="${shapeColor}" />` : ''}
    ${textElement}
  </svg>
`;
  return svgCode;
}


function writeLogoFile(svgContent) {
  const filename = 'logo.svg';
  const filePath = path.join(__dirname, filename);
  fs.writeFile(filePath, svgContent, err => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log(`SVG file "${filename}" created successfully!`);
    }
  });
}

module.exports = {
  generateLogoSVG,
};
