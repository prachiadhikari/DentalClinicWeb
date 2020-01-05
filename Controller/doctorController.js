
var doctor=require('../Model/UserModel.js');

function addDoctor(req,res,next){
	doctor.create({
		doctorname:req.body.doctorname,
		qualify:req.body.qualify,
		type:req.body.type,
		university:req.body.university,
		NMCNo:req.body.NMCNo
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

function deleteDoctor(req,res,next)
{
	if (req.params.id===null ||req.params.id===undefined){
		res.status(404);
		res.josn({status:404,message:'id not provided'})
	}
	//req.params.id
	doctor.destroy({
		where:{
			id:req.params.id
		}
	}).then(function(result){
		console.log(result);
		if (result===0){
			res.json({status:500,message:"couldnot delete"})
		}
		else
		{
			res.json({staus:200,message:"delete sucessfully"})
		}
	})
	.catch(function(err)
	{

	})

	;
}

function editDoctor(req,res,next){
	if (req.params.id===null || req.params.id===undefined){
		res.status(404);
		res.json({status:404,message:'id not provided'})
	}
	doctor.update({
		doctorname:req.body.doctorname,
		qualify:req.body.qualify,
		type:req.body.type,
		university:req.body.university,
		NMCNo:req.body.NMCNo
	},
	{
		where:{
			id:req.params.id
		}
	})
	.then(function(result)
	{
		console.log(result);

		if(result===0){
			res.json({status:500,message:'can not edit'})
		}
		else
		{
			res.json({status:200,message:'edited sucessfully'})
		}
	})
		.catch(function(err)
	{
         //res.json({status:404,message:'can not delete'})
	})
	;
}

module.exports={addDoctor,deleteDoctor,editDoctor}
