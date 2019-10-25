var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({extended: true}))
var camp_name=[
	{name: "harry", image: "https://365atlantatraveler.com/wp-content/uploads/2014/07/2014-06-27-17-44-23.jpg"},
	{name: "poter", image: "https://campaustralia.files.wordpress.com/2015/10/ontherope_photo.jpg"},
	{name: "awesome", image: "https://www.nps.gov/wica/planyourvisit/images/DSC_0796cropped.jpg?maxwidth=1200&maxheight=1200&autorotate=false"}
]

app.get('/nishu', function(req,res){
	res.render("campground", {campground:camp_name});

});


app.listen(3000, function(){
	console.log("server started:");
});
