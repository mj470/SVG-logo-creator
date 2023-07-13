import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

inquirer
.prompt ({
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for your logo:',
}
{
    type: 'input',
    name: 'textColor',
    message: 'Enter color for the text of your logo:',
    
},
{
    type: 'list',
    name: 'shape',
    message: 'Select a logo shape',
    choices: ['Triagnle', 'Circle', 'Square'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter background color for your logo:'
},
)

.then(answers => {
 const { text, textColor, shape, shapeColor } = answers;
 const svgCode = generateLogoSVG(text, textColor, shape, shapeColor);

 console.log('Generated SVG logo:');
 consolelg(svgCode);
})

.catch((err) => {
    consolelog.error(err);
});

function generateLogoSVG(text, textColor, shape, shapeColor) {
    let svgCode = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${color}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="white">${logoText}</text>
  </svg>`;

  return svgCode;
}
