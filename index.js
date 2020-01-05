

var express = require('express');
var bodyParser=require('body-parser'); 
var app = express();


app.use(bodyParser.urlencoded({extended:true})) 

var userModel=require('./Model/UserModel.js');
var userController=require('./Controller/userController.js');
var authController=require('./Controller/AuthController.js');
var doctorController=require('./Controller/doctorController.js');





app.post('/registration',userController.validator,userController.checkIfUserExits,userController.genHash,userController.actualregister)


app.post('/login',authController.validator,
	authController.passwordChecker,authController.jwtTokenGen)
app.put('/update/:id',authController.verifyToken,
	userController.editUser)

app.delete('/user/:id',authController.verifyToken,userController.deleteUser)

//-----------------------------------------------------------//
app.post('/addDoctor',authController.verifyToken,doctorController.addDoctor,
	doctorController.editDoctor,doctorController.deleteDoctor)
//---------------------------------------------------//
app.listen(3005);
