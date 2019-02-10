
const Post = require("../models/Post");

exports.login = (req,res)=>{
    res.render("admin/login");
}

exports.getRegistration = (req,res)=>{
   res.render("admin/registration");
}

exports.getAdmin = (req,res)=> {
    res.render("admin/dashboard", {layout: "admin/default"});
}

exports.getPosts = (req,res)=> {
    res.render("admin/posts", { layout: "admin/default"});
}
exports.getAddPost = (req,res)=> {
    res.render("admin/add-post", { layout: "admin/default"});
}

exports.postAddPost = (req,res)=>{

    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const post =  new Post({
        title,
        description,
        status
    });

    post.save().then(post=>{
        console.log("successfully post")
    }).catch(error=>console.log(error));

    console.log(Post);

     res.redirect("/");
}