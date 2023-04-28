const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const fs = require("fs");
const bodyParser=require("body-parser");
const path = require("path");
const ejs = require ("ejs");

require("dotenv").config();
//set views
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
/*
app.get('/',(req,res)=>{
    //read json file async and parse 
    fs.readFile('./jsonFiles/admin.json', 'utf8', (err, data)=>{
        if (err) throw err;
        if (data){
            //console.log(data);
            let json = {table:[]};
            JSON.parse(data).table.map(v => json.table.push(v));
            json.table.sort((a,b)=> b.value - a.value);
            res.render('login.ejs', {
                data:json
            });
           
        }

    })
    //res.render('login.ejs');
});
app.post('/', (req, res) => {
    let value= req.body.input;
    let json = {table: [] } ;
    fs.readFile('./jsonFiles/admin.json', 'utf8' , (err, data) =>{
        if(err) throw err;
        if (data){
            JSON.parse(data).table.map(v => json.table.push(v));
            json.table.push({value});
            fs.writeFile('./jsonFiles/admin.json', JSON.stringify(json),
            (err, data) => {
                if(err) throw err;
                if (data){
                    console.log(data);
                }
            });

    res.render('registerBirth.ejs');

        }
    });
    
    
});*/
// routers
app.use('/', require('./routes/index'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/registerCow', require('./routes/regCow'));
app.use('/registerMilk', require('./routes/regMilk'));
app.use('/registerMedicalExam', require('./routes/regMedicalExam'));
app.use('/newBirth', require('./routes/regNewbirth'));
app.use('/logout', require('./routes/logout')); 




/*app.use((req,res,next)=>{
    res.status(404).render('404');
});*/


module.exports = app;
const PORT = 3001;
app.listen(3001, () => { 
    console.log('server beating in port :${PORT} ');
});
