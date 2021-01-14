const { stringify } = require("querystring");

const bioData = {
    name: "Ankita",
    age: 26,
    channel: "Hello Hey",
};

// stringify= convert object in json.

const jsonData = JSON.stringify(bioData);
console.log(jsonData);


// parse = to get object data
const objData = JSON.parse(jsonData);
console.log(objData);