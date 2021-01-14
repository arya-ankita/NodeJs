//  1. convert obj in json
//  2. dusre file me add kar dena
//  3. readfile
//  4. again convert back to js obj ori
//  5. console.log

const fs = require("fs");
const bioData = {
    name: "Ankita",
    age: 26,
    channel: "Hello Hey",
};

// 1. 
const jsonData = JSON.stringify(bioData);

fs.writeFile("add.json", jsonData, (err)=>{
   console.log("file data added");
});

fs.readFile("./add.json", "utf-8", (err, data)=>{
    const orgData = JSON.parse(data);
    console.log(orgData);
});

