const { generateLogoSVG } = require('../index');

it('generateLogoSVG should generate an SVG logo with a circle shape', () => {
  const size = 200;
  const text = 'Circle Logo';
  const textColor = '#FFFFFF';
  const shape = 'circle';
  const shapeColor = '#FF0000';

  const expectedSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${shapeColor}" />
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="text-align: center;" fill="${textColor}">${text}</text>
      </svg>
  `.trim();

  expect(generateLogoSVG(size, text, textColor, shape, shapeColor)).toEqual(expectedSVG);
});

it('generateLogoSVG should generate an SVG logo with a triangle shape', () => {
  const size = 200;
  const text = 'Triangle Logo';
  const textColor = '#000000';
  const shape = 'triangle';
  const shapeColor = '#00FF00';

  const expectedSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <polygon points="0,${size} ${size},${size} ${size / 2},0" fill="${shapeColor}" />
         <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="text-align: center;" fill="${textColor}">${text}</text>
        </svg>
  `;

  expect(generateLogoSVG(size, text, textColor, shape, shapeColor)).toEqual(expectedSVG);
});

it('generateLogoSVG should generate an SVG logo with a square shape', () => {
  const size = 200;
  const text = 'Square Logo';
  const textColor = '#0000FF';
  const shape = 'square';
  const shapeColor = '#FFFF00';

  const expectedSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <rect width="${size}" height="${size}" fill="${shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="text-align: center;" fill="${textColor}">${text}</text>
      </svg>
  `;

  expect(generateLogoSVG(size, text, textColor, shape, shapeColor)).toEqual(expectedSVG);
});


