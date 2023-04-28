const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// create app
const app = express();

// set views
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

// routers
app.use('/', require('./routes/dashboard'));
app.use('/register-cow', require('./routes/regCow'));
app.use('/register-milk', require('./routes/regMilk'));
app.use('/register-medical-exam', require('./routes/regMedicalExam'));
app.use('/new-birth', require('./routes/regNewbirth'));
app.use('/cows', require('./routes/cows'));
app.use((req,res) => { res.status(404).render('404');});

module.exports = app;

app.listen(3001);