const express = require('express');
const fs = require("fs");
const router = express.Router();

const data = fs.readFileSync('./jsonFiles/cow.json');
let json = JSON.parse(data);

router.get('/',(req,res)=>{
    res.render('registerMedExam');
});

router.post('/',(req,res)=>{
    const id = req.body.number;
    //console.log(id);
    const {disease,Date} = req.body;
    let newExam={
        disease,
        Date
    };
    for (let i=0; i < json.length; i++){
        if(json[i].id == id  ){
            if(json[i].MedicalExam){
            json[i].MedicalExam.push(newExam);
            const data = JSON.stringify(json);
            fs.writeFileSync('./jsonFiles/cow.json',data,'utf-8');
            res.redirect('Cows'); 
            }
            if(!json[i].MedicalExam){
                json[i].MedicalExam=[];
                json[i].MedicalExam.push(newExam);
                const data = JSON.stringify(json);
                fs.writeFileSync('./jsonFiles/cow.json',data,'utf-8');
                res.redirect('Cows'); 
                }
        }
        }

    

    /*
    const {name,birthday,enter,breed,motherid} = req.body;
    let newCow={
        id:json.length+1,
        name,
        birthday,
        enter,
        breed,
        motherid
    };
    json.push(newCow);

    const data = JSON.stringify(json);
    fs.writeFileSync('./jsonFiles/cow.json',data,'utf-8');
    res.redirect('Cows'); */
    });
module.exports = router;