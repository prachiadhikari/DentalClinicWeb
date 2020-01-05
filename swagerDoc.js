
require('index.js');
var swaggerJSDoc= require('swagger-jsdoc');
var swaggerUI=require('swagger-ui-express');

var swaggerDefinition={
info:{
	title:'dentalClinic',
	description:'This is myapp documentation',
	version:'1.0.0'
},//option dine place
securityDefinitions:{
	bearerAuth:{
		type:'apiKey',
		name:'authorization',
		in:'header',
		scheme:'bearer'
	}
} ,        //for delete
host:'localhost:3002',
basePath:'/'
}

var swaggerOptions={
	swaggerDefinition,
apis:['./swaggerDoc.js']	
}
var swaggerSpecs=swaggerJSDoc(swaggerOptions);//definion is coverd through this

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpecs))
 
app.use(bodyParser.urlencoded({extended:true}))

 var userModel=require('./Model/UserModel.js');
var userController=require('./Controller/userController.js');
var authController=require('./Controller/AuthController.js');
app.post('/registration',userController.validator,userController.checkIfUserExits,userController.genHash,userController.actualregister)

app.listen(3002);
module.exports= app
