var express =require('express')
var app=express()
var {Client}=require("pg")
var body=require("body-parser")
var cors=require("cors")

app.use(body.json())
app.use(body.urlencoded({extended:true}))
app.use(cors())

var cli=new Client({
    user:"postgres",
    host:"demo-database.ceedfewvgpkb.us-east-1.rds.amazonaws.com",
    port:5432,
    
    password:"12345678",
    database:"sample-db2",
    ssl:{
        rejectUnauthorized:false
    }
})
cli.connect((err,res)=>{
    if(err) throw err;
    console.log("database Connected")
})


app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.post("/add",(req,res)=>{
    var user=req.body.user
    var pass=req.body.pass
    const sql=`INSERT INTO "UserMaster"(uname,password) values ('${user}','${pass}')`
    cli.query(sql,(err,resi)=>{
        if(err) throw err
        console.log(resi)
        res.send("Added Sucessfully")
    })



})
app.post("/login",(req,res)=>{
    var user=req.body.user
    var pass=req.body.pass
    const sql=`select * from "UserMaster" where uname='${user}' and password='${pass}'`
    cli.query(sql,(err,ress)=>{
        if(err) throw err
        var dta=ress.rows
        if(dta.length==0){
            res.send("401 UnAuthorized")
        }
        else{
            res.send("200 Authorized Access")
        }
    })
})

app.listen(8000,()=>{
    console.log("Server Started")
})