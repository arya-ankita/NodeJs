const fs = require("fs");


fs.writeFileSync("read.txt", "Welcome to my first module");

fs.writeFileSync("read.txt", "Hello I am not going to burn");

fs.appendFileSync("read.txt","This is the data to append");

const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
//  Node.js includes an additional data type called Buffer.
//  (Not available in browser's javaScript).
//  Buffer is mainly used to store binary data.
//  while reading from a file or receiving packets over the network.

const data = buf_data.toString();
console.log(data);

fs.renameSync("read.txt", "readWrite.txt");
