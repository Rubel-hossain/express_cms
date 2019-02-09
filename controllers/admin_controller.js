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