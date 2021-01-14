const http = require('http');
const port = 8000;
const fs = require('fs');
function requestHandler(req,res){
    console.log(req.url);
    

    let filePath;

    switch(req.url){
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        
        default:
            filePath = './404.html';
            break;

    }

    fs.readFile(filePath, function(err, data){
             if(err){
                 console.log("error", err);
                 return res.end('<h1>Error!</h1>')
             }
    
             return res.end(data);
         })
    
    // fs.readFile('./index.html', function(err, data){
    //     if(err){
    //         console.log("error", err);
    //         return res.end('<h1>Error!</h1>')
    //     }

    //     return res.end(data);
    // })

    // res.end('Gotcha!');
}


// creating server
const server = http.createServer(requestHandler);

// server will listen on port and if error it will give error code
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on port :", port);
});