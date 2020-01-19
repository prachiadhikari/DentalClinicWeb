const express = require('express');
const Appointment = require('../models/appointment');

const router = express.Router();

router.post('/addAppointment', (req, res, next) => {
    
    Appointment.create({
            name:req.body.name,
            date:req.body.date,
            time:req.body.time,
            doctor: req.body.doctor,
            problem: req.body.problem


        }).then((appointment) => {
            res.json({ status: "appointment added success!" });
        }).catch(next);
    })

router.get('/',(req, res, next) => {
    Appointment.find({},(err,appo)=>{
        if(err){
            res.json(next)
        }
        res.json(appointment)
    });
})

  


        

            


module.exports = router;
