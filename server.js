const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const bodyparser=require("body-parser");
const path=require('path');

const app=express();

//working..


dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080

//log requests
 app.use(morgan('tiny'));

 //parse requests to body-parser
 app.use(bodyparser.urlencoded({extended: true}))

 //set view engine
 app.set("view engine","ejs")
 //app.set("views",path.resolve(__dirname,"views/ejs"))
 app.use("/css",express.static(path.resolve(__dirname,"assests/css")))
 app.use("/img",express.static(path.resolve(__dirname,"assests/img")))
 app.use("/js",express.static(path.resolve(__dirname,"assests/js")))

app.get('/',(req,res)=>{
    res.send("querying..")
})

app.listen(PORT,()=>{console.log('server is running on http://localhost:${PORT}')})
