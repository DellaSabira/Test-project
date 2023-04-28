const express = require('express');
const fs = require("fs");
const router = express.Router();

const data= fs.readFileSync('./jsonFiles/milk.json');
let json = JSON.parse(data);

router.get('/',(req,res)=>{
    res.render('registerMilk');
});

router.post('/',(req,res)=>{
    const {date,amount}= req.body;
    let newMilk={
        id: json.length +1,
        date,
        amount
    };
    json.push(newMilk);

    const data = JSON.stringify(json);
    fs.writeFileSync('./jsonFiles/milk.json',data,'utf-8');
    res.redirect('Cows');

});

module.exports = router;