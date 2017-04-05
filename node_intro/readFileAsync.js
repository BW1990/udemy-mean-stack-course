var fs = require('fs');

var onFileLoad = function(err, file) {
  console.log('got the file');
}

var file = fs.readFile('readFileSync.js', onFileLoad);

console.log('getting a file...');
console.log('...app continues');
