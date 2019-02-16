
exports.getIndex = (req,res)=>{
    req.flash('info', 'Flash is back!');
    res.render("index",{msg: req.flash("info")});
}