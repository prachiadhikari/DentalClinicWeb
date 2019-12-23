

var express = require('express');
var bodyParser=require('body-parser'); 
var app = express();

var multer= require('multer');

var upload=multer({dest:'images/'})

app.use(bodyParser.urlencoded({extended:true})) 


var userModel=require('./Model/UserModel.js');
var userController=require('./Controller/userController.js');
var authController=require('./Controller/AuthController.js');


app.post('/registration',userController.validator,userController.checkIfUserExits,userController.genHash,userController.actualregister)

app.listen(3003);



