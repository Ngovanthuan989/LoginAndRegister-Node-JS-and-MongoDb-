var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
const CustomerModel = require('./model/customerModel');
const { get } = require('http');


app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/view/register.html"));
})

app.post('/register', function(req, res) {
    var fullName = req.body.fullname;
    var address = req.body.address;
    var age = req.body.age;
    var email = req.body.email;
    var password = req.body.password;

    console.log(fullName, address, age, email, password);

    CustomerModel.create({
        fullname: fullName,
        address: address,
        age: age,
        email: email,
        password: password
    }).then(function(data) {
        res.redirect('/login');
    })
})

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/view/login.html"));
})

app.post('/login', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    CustomerModel.findOne({
        email: email,
        password: password
    }).then(function(data) {
        if (data) {
            res.redirect('/welcome');
        } else {
            res.json('Email Hoặc Password Sai!');
        }
    })
})
app.get('/welcome', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/view/Welcome.html"));
})
app.listen(5000);