// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename) {
//  // const contents = readFileSync(filename, 'utf-8');
//  const buffer = readFileSync(filename);
//  const contents = buffer.toString();
//  console.log(contents)
//   const arr = contents.split(/\r?\n/);

//   console.log(arr); 

//   return arr;
// }

// const words = syncReadFile('./words.txt');
// console.log(words)

//---------------------------------------
// get filesystem module
function readtxtfile(filename) {
    const fs = require("fs");

    // using the readFileSync() function
    // and passing the path to the file
    const buffer = fs.readFileSync(filename);

    // use the toString() method to convert
    // Buffer into String and split on lines 
    const fileContent = buffer.toString();
    const arr = fileContent.split(/\r?\n/)

    //console.log(fileContent);
    //console.log(arr);

    return arr;
} 

const words = readtxtfile('words.txt')
console.log(words)

function shuffle(words) {
    const random = Math.floor(Math.random() * words.length);
        return words[random]
}

randomword = shuffle(words)
console.log(randomword)