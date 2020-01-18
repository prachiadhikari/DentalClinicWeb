//doctor details
var dbConfig =require('../Config/databaseConfig.js');

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
module.exports=doctor;