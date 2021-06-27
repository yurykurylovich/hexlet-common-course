/* printer.js
Write and export by default asynchronous print() function that reads the file data using fs method and prints it to the console.
Nevermind error parameter for now.
*/
// import fs from "fs";
const fs = require("fs");

const path = './readme.md'
const print = (path) => fs.readFile(path, 'utf-8', (_error, data) => console.log(data))

print(path)
