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

// routers

app.use('/dashboard', require('./routes/dashboard'));
app.use('/registerCow', require('./routes/regCow'));
app.use('/registerMilk', require('./routes/regMilk'));
app.use('/registerMedicalExam', require('./routes/regMedicalExam'));
app.use('/newBirth', require('./routes/regNewbirth'));
app.use('/Cows', require('./routes/cows'));




app.use((req,res,next)=>{
 res.status(404).render('404');
});


module.exports = app;

app.listen(3000);
    
