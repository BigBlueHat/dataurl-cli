const fs = require('fs');

const dataurl = require('dataurl');

const pathToSomeImage = process.argv[2];

if (!pathToSomeImage) {
  console.error('Filename is required.');
} else {
  const image = fs.readFileSync(pathToSomeImage);
  // TODO: detect media type
  const url = dataurl.convert({ data: image, mimetype: 'image/png' });
  console.dir(url);
}
