const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
 // const contents = readFileSync(filename, 'utf-8');
 const buffer = readFileSync(filename);
 const contents = buffer.toString();
 console.log(contents)
  const arr = contents.split(/\r?\n/);

  console.log(arr); 

  return arr;
}

const words = syncReadFile('./words.txt');
console.log(words)