module.exports = {
    mongodb_url: "mongodb+srv://rubel:rubel123@cluster-bd-eyr07.mongodb.net/express_cms?retryWrites=true",
    globalVariables: (req,res,next)=>{
        res.locals.success_msg = req.flash("success");
        res.locals.error_msg = req.flash("error");
        next();
    }
}