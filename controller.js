const express=require("express");
const app=express();
const { Register }=require("./model")
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",(req,res)=>{
  Register.find({},(err,data)=>{
    if(!err){
      res.json(data);
      console.log("GET",data);
    } else {
      console.log(err);
    }
  })
})

app.post("/",(req,res)=>{
  var TitleApp= req.body.title, 
  SnippetApp= req.body.snippet, 
  BodyApp= req.body.body;
  var reg={
    Title: TitleApp,
    Snippet: SnippetApp,
    Body: BodyApp
  }
  Register.create(reg,(err,regidone)=>{
    if(!err){
      res.json("Register Done");
      console.log("Registration",regidone);
    } else {
      console.log(err);
    }
  })
})

app.delete("/:id",(req,res)=>{
  var id=req.params.id;
  Register.findByIdAndRemove({_id:id},(err,data)=>{
    if(!err) {
      console.log("Deleted Data",data);
      res.json(data);
    } else {
      console.log(err);
    }
  })
})

app.put("/:id",(req,res)=>{
  var id=req.params.id;
  var TitlePut=req.body.t, SnippetPut=req.body.s, BodyPut=req.body.b;
  var put = {
    Title: TitlePut,
    Snippet: SnippetPut,
    Body: BodyPut
  }
  Register.findByIdAndUpdate({_id:id},put,{ returnOriginal: false },(err,putdone)=>{
    if(!err) {
      console.log("PUT Data",putdone);
      res.json(putdone);
    } else {
      console.log(err);
    }
  })
})

module.exports=app;