#!/usr/bin/env node

const fs = require('fs');

const dataurl = require('dataurl');
const mime = require('mime-types')

const pathToSomeImage = process.argv[2];

if (!pathToSomeImage) {
  console.error('Filename is required.');
} else {
  const image = fs.readFileSync(pathToSomeImage);
  const mimetype = mime.lookup(pathToSomeImage);
  // TODO: detect media type
  const url = dataurl.convert({ data: image, mimetype });
  process.stdout.write(url);
}
