var dbConfig =require('../Config/databaseConfig.js');
//for defining model

 var user = dbConfig.sequelize.define('user',
 //table name
 {
 	//attributes

 	id:
 	{
 		type:dbConfig.Sequeslize.INTEGER ,
 		//datatype
 		primaryKey:true ,
 		autoIncrement:true,
 		allowNull:false
 	},
 	Fullname:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

 	username:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

 	password:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	address:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	dateOfBirth:
 	{
 		type:dbConfig.Sequeslize.DATE ,//datatype
 		allowNull:false
 	},
 	Gender:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

},	
 	
   {
   	paranoid:true,
 	freezeTableName:false,
 	tableName:'user' 
 	//table name change


    }) 

  user.sync({force:false})   //promise handeler so 
 .then(function(result)
 {
console.log(result);
console.log("success");

 })
 .catch(function(err)
 {
 	console.log(err)
 })


 var doctor = dbConfig.sequelize.define('doctor',
 //table name
 {
 	//attributes

 	id:
 	{
 		type:dbConfig.Sequeslize.INTEGER ,
 		//datatype
 		primaryKey:true ,
 		autoIncrement:true,
 		allowNull:false
 	},

 	FullName:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

 	NMCNo:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	university:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	qualification:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

 	
},
 	
   {
 	freezeTableName:true,
 	tableName:'doctor'


    }) 
  doctor.sync({force:false})   
 .then(function(result){
console.log(result)
 })
 .catch(function(err)
 {
 	console.log(err)
 })

module.exports={doctor,user};
