
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/test');
var Schema = mongoose.Schema;

var things  = require('./things.js');

var userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    mobile_num: Number,
    plan: Number,
    donated: Number,
    charity: String
});

var charitySchema = new Schema(
    {
        name: String,
        updates: String,
        description: String
    }
)

var User = db.model('user', userSchema);
var user = new User({username:'JuanDLC',
                     password: 'proud2bepinoy',
                     name: 'Juan De La Cruz', 
                     mobile_num: 09694201234, 
                     plan:30,donated:36, 
                     charity: "Philam Foundation"});

var Charity = db.model('charity', charitySchema);
var charity = new Charity(
    {
        name: 'Philam Foundation',
        updates: 'Philam Foundation has built 217 classrooms so far. Benefitting over 40,000 students all over the Philippines. '
    }
)

db.once('connected', function(err){
    // if(err)
    // {
    //     return console.error(err);
    // }
    // Test.create(test, function(err, doc)
    // {
        
    // })
})

app.use('/things', things);

app.get('/', function(req,res)
{
    res.send("Welcome to the home page! Mr. " + user.name);
});

app.get('/hello', function(req,res)
{
    res.send("Hello world!");
})

app.get('/user', function(req, res)
{
    res.write("Name: " + user.name + "\n");
    res.write("Connected Number: " + user.mobile_num + "\n");
    res.write("Current plan: " + user.plan + "\n");
    res.write("Current total donations: " + user.donated + "\n");
    res.write("Charity supported: " + user.charity + "\n");
    res.end();
})

// app.get('/:id', function(req,res)
// {
//     res.send('the ID you specified is' + req.params.id);
// });

app.get('/load', function(req,res)
{
    // res.sendFile('/Users/CLARIN/Documents/Jericho/LifeHackers 2019/test/donate.html');
    res.write("you have donated" + user.donated + "so far" + "\n");
    res.write("Your current plan is" + user.plan);
    res.end();
    
})

app.post('/load', function(req,res)
{
    res.send(user.donated);
})

// app.get('/settings', function(req, res)
// {
//     res.write("")
// })

app.get('/plan', function(req, res)
{
    res.write("The current deduction from your load is " + user.plan + "\n");
    res.write("Here are the other plans available to you \n");
    res.end();
    //dito siguro lagay all the shit or w/e
    
})


app.listen(3000);