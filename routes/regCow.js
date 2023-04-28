const express = require('express');
const fs = require("fs");
const router = express.Router();

const data= fs.readFileSync('./jsonFiles/cow.json');
let json = JSON.parse(data);
router.get('/',(req,res)=>{
    res.render('registerCow');
});

router.post('/',(req,res)=>{
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
    res.redirect('/Cows');
    });




module.exports = router;