const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Hello Response");
    }else if(req.url == "/option"){
        res.end("I am second");
    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end("<h1> 404 error </h1>");
    }
})


server.listen(8000, "127.0.0.1", ()=>{
    console.log("I am done");
});


