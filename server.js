const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const { dirname } = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/CSS',express.static(path.resolve(__dirname,"assets/CSS")))
app.use('/IMG',express.static(path.resolve(__dirname,"assets/IMG")))
app.use('/JS',express.static(path.resolve(__dirname,"assets/JS")))


app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});