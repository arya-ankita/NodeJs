const fs = require("fs");

// to make dir, if dir is already there it will create an error.
 fs.mkdirSync("Crud");


// to make file, and put data in it, if file is there and data is there it will overwrite it. 
fs.writeFileSync("Crud/opt.txt", "Hi, DOn't know what to write");

// to append data
fs.appendFileSync("Crud/opt.txt","Again !!!!");

// readFileSync only gives buffer data, so utf-8 is used to encode it into readable form. 
const data = fs.readFileSync("Crud/opt.txt", "utf-8");
console.log(data);


// to rename file
fs.renameSync("Crud/opt.txt", "Crud/optt.txt");

// to delete file
// fs.unlinkSync("Crud/optt.txt");

// to delete folder
// fs.rmdirSync("Crud");