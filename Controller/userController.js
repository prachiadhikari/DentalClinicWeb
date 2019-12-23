var bcrypt=require('bcrypt');

var user = require('../Model/UserModel.js');

function validator(req,res,next)
{
	if(req.body.username===''){
		//console.log(req.body)
		res.json({status:404,message:'username required'})
	}

	else if (req.body.password===''){
		console.log("Password not found");
		res.json({status:200,message:'password is required'});
	}
		else{
			//console.log(req.body)
			next();
			//res.json({status:200,message:'jhwbj'})
		}
}


function genHash(req,res,next)
{
	var saltRounds=10;
 bcrypt.hash(req.body.password,saltRounds,function(err,hash)
 	{
 		if (hash)
 		{
 			console.log(hash);

 			//for adding key  
 			req.hashKey=hash;
 			actualregister(req,res,next);

 			//res.json(hash)
 			//res.json(status:200,message:"password get");
 		}
 		else
 		{
 			console.log(err);
 			res.json({status:500,message:"could not hash"});
 		}
 	});
}

function actualregister(req,res,next)
{//insert into user table
	user.create({
		username:req.body.username,
		fullname:req.body.fullname,
		address:req.body.address,
		gender:req.body.gender,
		dob:req.body.dob,

		password:req.hashKey

	})
	.then(function(result)
	{
		console.log(result);
		res.json(result);
	})
	.catch(function(err)
	{
		console.log(err);
		res.json(err);
	})
}

function checkIfUserExits(req,res,next){
	//db->username exits

	user.findOne({
		where:{username:req.body.username}
	})
	.then(function(result)
	{
		console.log(result);
		if (result===null)
		{
			next();

		}
		else
		{
		res.json({status:409,message:'user already exits'});

		}
	})
	.catch(function(err)
	{
		res.json(err);

	})
}

module.exports={validator,checkIfUserExits,genHash,actualregister}