const fs = require('fs');

fs.writeFile("read.txt", "Hello I am Syncronous mode", (err)=>{
    console.log("Files are created");
    console.log(err);
});

// We pass them a function as an argument, that is a callback function.
// that gets call when that task is completed.
// The callback has an argument that tells you weather the operation completed successfully or not.
//  Now we need to say what to do, when fs.writeFile has completed.
// (even if it's nothing), start checking for error.

fs.appendFile("read.txt", "We are happy", (err)=>{
    console.log("Task completed");
});

fs.readFile("read.txt", 'UTF-8', (err, data)=>{
    console.log(data);
})
