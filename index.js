const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const exphbs = require("express-handlebars");
const {mongodb_url} = require("./config");
const default_routes = require("./routes/default_routes");
const admin_routes = require("./routes/admin_routes");
const flash = require("connect-flash");
const session = require("express-session");

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

app.use(flash());

app.use(session({
    secret: 'rubelskey',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
 }));

app.use(default_routes); 
app.use(admin_routes);


mongoose.connect(mongodb_url, {useNewUrlParser: true}).then(response=>{
    console.log("database connected successfully");
}).catch(error=>{
    console.log(error);
});

app.get('/flash', function(req, res){
    // Set a flash message by passing the key, followed by the value, to req.flash().

  });

app.listen("3000",()=>{
    console.log("server start");
});