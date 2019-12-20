//----for connection with database----
var Sequeslize=require('sequelize');
var sequelize = new Sequeslize
('clinic','root','flyweight', //database,usernaem,password
{
	host:'localhost',
	dialect:'mysql',
	logging:false

});

//----testing connection---
sequelize
  .authenticate()
  //--- .then() is promise handeler--- for actual data create callback function
  .then(function(result)  {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.error('Unable to connect to the database:', err);
  })
//these can only be use which are mentioned here
  module.exports={
    Sequeslize,
    sequelize
  }