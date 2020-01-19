const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

router.post('/addContact', (req, res, next) => {
    
        Contact.create({
            Cemail:req.body.Cemail,
            message:req.body.message,
            fullName:req.body.fullName


        }).then((contact) => {
            res.json({ status: "contact us data added success!" });
        }).catch(next);
    })

router.get('/',(req, res, next) => {
    Contact.find({},(err,contact)=>{
        if(err){
            res.json(next)
        }
        res.json(contact)
    });
})

  


        

            


module.exports = router;
