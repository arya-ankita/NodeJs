const express = require('express');
const port = 8000;
const path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


var contactList = [
    {
        name:"Ankita",
        phone: 11111111111
    },
    {
        name:"Archita",
        phone: 222222222
    },
    {
        name:"Varun",
        phone: 3333333333
    }
]

app.get('/', function(req, res){
    // console.log(__dirname);
    return res.render('home', 
    {
        title: "contact list",
        contact_list: contactList
    });
});


app.get('/practice', function(req, res){
    return res.render('Practice', {title: "HHHHHhhhh"});
});


app.listen(port, function(err){
    if(err){
        console.log('Error in running server');

    }

    console.log('Yupp! My Express server is running');
});