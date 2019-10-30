var express = require("express");
var app = express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var camp_name=[
	{name: "harry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1V3Hiv_MrA2AK_Qj4tW1MKaLScwXp3h04UiYZCI1DvjZZD29v"},
	{name: "poter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyX-Vo5q8b7O_BU2PIEEblR8lD-UAjqYHnt_PLFEjO8xR_yf13"},
	{name: "awesome", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNuBONmgmI0_VNn1WlXZOaq54UcbOCYa7E2bjPjFTQpPkmBTRN"},
    {name: "sepaq", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRItQ-8Q37rzQlrJEIuo-3YXMSa73m0hpzlMq95BBc6sUYEBeuX"},
    {name: "california", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVfrj0whEuOJv5Zu0Y0e6jUzShwTh8BMy0J0gbXfU98MaxeLRG"},
    {name: "rajmachi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCX6DdC2qSph3Sc09VXQ1H_8Fk44bJLSsvSD9EjUFrBlUCfWY6"}
]
app.get("/camp", function(req,res){
	res.render("campground", {campground:camp_name});
 });
app.post("/nishu", function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newcamp={name: name, image: image};
    camp_name.push(newcamp);
    res.redirect("/camp");
});
app.get("/nishu/new", function(req,res){
    res.render("new");
});


app.listen(3000, function(){
	console.log("server started:");
});
