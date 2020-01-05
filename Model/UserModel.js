var dbConfig =require('../Config/databaseConfig.js');




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
 	fullname:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	address:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	dob:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	gender:
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
 	}
},	
 	
   {
   	paranoid:true,
 	freezeTableName:false,
 	tableName:'user_table' 
 	//table name change


    }) 

  user.sync({force:false})   //promise handeler so 
 .then(function(result)
 {
console.log(result);
console.log("user table created");

 })
 .catch(function(err)
 {
 	console.log(err)
 })

 //doctor details

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
 	doctorname:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	qualify:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	type:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},
 	university:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	},

 	NMCNo:
 	{
 		type:dbConfig.Sequeslize.TEXT ,//datatype
 		allowNull:false
 	}
},	
 	
   {
   	paranoid:true,
 	freezeTableName:false,
 	tableName:'doctor' 
 	//table name change


    }) 

  doctor.sync({force:true})   //promise handeler so 
 .then(function(result)
 {
console.log(result);
console.log("doctor table is created");

 })
 .catch(function(err)
 {
 	console.log(err)
 })

module.exports={user,doctor};
