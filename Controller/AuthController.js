
var user=require('../Model/UserModel.js');
var bcrypt=require('bcrypt');


function validator(req,res,next)
{
 if (req.body.username===''){
 	res.json({status:200,message:'usename required'})
 }
 else
 {

user.findOne({
		where:{
			username:req.body.username
		}
	})
.then(function(result){

if(result === null){
	status:404;


}
else{

	req.xyz = result.dataValues.password;
	next();
}


})
.catch()
 	// next();
 }
}


module.exports=validator