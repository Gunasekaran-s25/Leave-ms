const  express = require("express");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
// const mysql = require("mysql");

require('dotenv').config();

const app=express();
const port=process.env.PORT || 4000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//static files
app.use(express.static("public"));

//Template engine
const handlebars =exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

//MySql
// const con=mysql.createPool({
//     connectionLimit:10,
//     host : process.env.DB_HOST,
//     user : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DB_NAME
// });

//Check database connection


//Router

// app.get('/',(req,res)=>{
//     res.render("home");
// });
// app.get('/login',(req,res)=>{
//     res.render("login");
// });

const routes=require("./server/routes/student");
app.use('/',routes);

// Listen Port

app.listen(port,()=>{
console.log("Listening Port : "+port);
   }); 

