const express = require("express");
const router = express.Router();
const fs = require("fs");

const data = fs.readFileSync('./jsonFiles/cow.json');
let json = JSON.parse(data);

router.get('/:breed',(req,res) => {
    const { breed } = req.params;
    let cows = json.filter(cow => cow.breed === breed);
    res.render('Cows', {
        cows
    });
});

router.get('/',(req,res) => {
    res.render('Cows', {
        cows:json
    });
});

module.exports=router;