const express = require('express');
const router = express.Router();
const fs = require("fs");


const data = fs.readFileSync('./jsonFiles/admin.json');
let json = JSON.parse(data);



router.get('/',(req,res)=>{
    res.render('login',{json});
});
router.post('/',(req,res)=>{
    const us = req.body.username;
    console.log(us);
    const ps = req.body.password;
    for (let i=0; i < json.length; i++){
        if(json[i].name == us && json[i].password == ps ){

            res.redirect('dashboard');

        }
    }
    res.redirect('/');
});

/*
router.post('/login',(req,res)=>{

    const us = req.body.username;
    console.log(us);
    const ps = req.body.password;
    for (let i=0; i < js.length; i++){
        if(js[i].username == us && js[i].password == ps ){

            res.redirect("/home");

        }
    }
    res.redirect("/signeUp");
})


router.get('/signeup',(req,res)=>{
    res.render('signeUp',{json});
});
router.post('signeup',(req,res)=>{
    const newCow = req.body;
js.push(newCow);
//saving the array into the file 
const da = JSON.stringyfy(js);
fs.writeFileSync('signeup.json',da,'utf-8');
res.redirect('/');
});
router.post('/home',(req,res)=>{
    const {image,name,price} = req.body;
    let newprod={
        id:json.length+1,
        image,
        name,
        price
    };
    json.push(newprod);

    const data = JSON.stringify(json);
    fs.writeFileSync('cow.json',data,'utf-8');
    res.redirect('/home');
});
router.get('/delete/:id',(req,res)=>{
    json=json.filter(d => d.id != req.params.id);

    const data = JSON.stringify(json);
    fs.writeFileSync('products.json',data,'utf-8');
    res.redirect('/home');

});
*/
module.exports = router;