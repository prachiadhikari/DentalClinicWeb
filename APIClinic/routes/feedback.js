const express = require('express');
const Feedback = require('../models/feedback');

const router = express.Router();

router.post('/addFeedback', (req, res, next) => {
    
        Feedback.create({
            user:req.body.user,
            comment:req.body.comment


        }).then((feedback) => {
            res.json({ status: "feedback added success!" });
        }).catch(next);
    })

router.get('/',(req, res, next) => {
    Feedback.find({},(err,feedback)=>{
        if(err){
            res.json(next)
        }
        res.json(feedback)
    });
})



module.exports = router;
