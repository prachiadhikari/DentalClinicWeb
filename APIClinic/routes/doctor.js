const express = require('express');
const Doctors = require('../models/doctor');

const router = express.Router();

router.post('/addDoctor', (req, res, next) => {
    
        Doctors.create({
            Drname:req.body.Drname,
            Qualification:req.body.Qualification,
            DrType:req.body.DrType,
            University: req.body.University,
            NMCNo: req.body.NMCNo,
            Drimage: req.body.Drimage


        }).then((doctor) => {
            res.json({ status: "doctor added success!" });
        }).catch(next);
    })

router.get('/',(req, res, next) => {
    Doctors.find({},(err,doctor)=>{
        if(err){
            res.json(next)
        }
        res.json(doctor)
    });
})

  


        

            


module.exports = router;
