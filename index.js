const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const exphbs = require("express-handlebars");
const {mongodb_url} = require("./config");
const default_routes = require("./routes/default_routes");
const admin_routes = require("./routes/admin_routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

app.engine("hbs", exphbs({
    extname: "hbs",
    defaultLayout: "main",
    partialsDir: path.join(__dirname,"views/partials"),
    layoutsDir: path.join(__dirname,"views/layouts")
}));
app.set("view engine","hbs");

app.use(default_routes); 
app.use(admin_routes);

mongoose.connect(mongodb_url, {useNewUrlParser: true}).then(response=>{
    console.log("database connected successfully");
}).catch(error=>{
    console.log(error);
})

app.listen("3000",()=>{
    console.log("server start");
});