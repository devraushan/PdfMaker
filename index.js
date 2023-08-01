const express = require("express")
const fs = require("fs");
const path = require("path");
app = express();


app.use(express.json())
let data = fs.readFileSync("./UserData/userData.json","utf-8")
data = JSON.parse(data)
//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index",{data});
});

app.get("/profile/:name",(req,res)=>{
    const name = req.params.name
    const filepath = path.join(process.cwd(),`profilePhotos/${name}`)
    res.sendFile(filepath)
})

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});