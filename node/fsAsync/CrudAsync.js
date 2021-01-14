const fs = require("fs");

fs.mkdir("Crud", (err)=>{
    console.log("Directory created");
});

fs.writeFile("./Crud/read.txt", "Hello I am your new file", (err)=>{
    console.log("I am ready");
});

fs.appendFile("./Crud/read.txt", "I am appended data", (err)=>{
    console.log("I am appended");
})

fs.readFile("./Crud/read.txt", 'UTF-8', (err, data)=>{
    console.log(data);
});

fs.rename("./Crud/read.txt", "./Crud/readd.txt", (err)=>{
  console.log("rename done");
});

 fs.unlink("./Crud/readd.txt", (err)=>{
   console.log("file deleted");
 });

fs.rmdir("./Crud", (err)=>{
    console.log("Folder deleted");
});
