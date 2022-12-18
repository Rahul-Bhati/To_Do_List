const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
const app = express() ;

app.set("view engine","ejs");
// Day 3
app.use(bodyParser.urlencoded({extended: true}));
// Day 4
app.use(express.static("public"));

const items = ["Shop Vegitable" , "Cook Food" , "Eat Food"];

// Day 4
const Workitems = [];

app.get("/",function(req,res){
  // res.send("Hello World");

  /*// Day 1
  if(currentDay == 1 || currentDay == 6)
    res.send("Yay It's fun time.");
  else{
    res.write("It not a weekend");
    res.write("Boo I have to work.");
    res.send(); // res.send send all the data from server to browser or res.write is use to display what is written in multi line message
    // res.send("Boo I have to work."); error multiple line likhne k liye write ka use krte h
  }
  */
  /* // Day 2
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  if(currentDay == 0 || currentDay == 6)
      day = weekday[currentDay];
  else
      day = weekday[currentDay];

  res.render("list",{kindofday : day});

  */

  // Day 5 (module)
  const day = date.getDate();
  res.render("list",{listItem : day , item : items});

});

// Day 3
app.post("/",function(req,res){
  // console.log(req.body
  const item = req.body.newItem ;
  if(req.body.list === "Work List"){
    Workitems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

// Day 4
app.get("/work",function(req,res){
  res.render("list",{listItem : "Work List" , item : Workitems});
});
app.get("/about",function(req,res){
  res.render("about");
});

app.listen(5000,function(){
  console.log("Server started on port 3000");
});
