var express=require('express')
var app=express()
var cb0 = function(req,res,next){
console.log('This is CB0')

}

var cb1 = function(req,res,next){
console.log('This is CB1')

}

var cb2 = function(req,res){
    res.send('This is Cb2')
}

app.get('/example/d',cb0,cb1,cb2)
var server=app.listen(3000,()=>{})