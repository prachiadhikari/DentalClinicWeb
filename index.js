

var express = require('express');
var bodyParser=require('body-parser'); 
var app = express();


app.use(bodyParser.urlencoded({extended:true})) 

var userModel=require('./Model/UserModel.js');
var userController=require('./Controller/userController.js');
var authController=require('./Controller/AuthController.js');




app.post('/registration',userController.validator,userController.checkIfUserExits,userController.genHash,userController.actualregister)


app.post('/login',authController.validator,
	authController.passwordChecker,authController.jwtTokenGen)

app.delete('/user/:id',authController.verifyToken,userController.deleteUser)
app.listen(3000);
