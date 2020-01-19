const express = require('express');
const Treatment = require('../models/treatment');

const router = express.Router();

router.post('/addTreatment', (req, res, next) => {
    
        Treatment.create({
            treatmentName:req.body.treatmentName,
            treatmentImage:req.body.treatmentImage


        }).then((treatment) => {
            res.json({ status: "treatment added success!" });
        }).catch(next);
    })

router.get('/',(req, res, next) => {
    Treatment.find({},(err,feedback)=>{
        if(err){
            res.json(next)
        }
        res.json(treatment)
    });
})



module.exports = router;
