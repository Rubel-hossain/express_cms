const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/admin_controller");

 router.route("/login")
     .get(admin_controller.login);

 router.route("/registration")
     .get(admin_controller.getRegistration);

 router.route("/admin")
     .get(admin_controller.getAdmin);

 router.route("/admin/posts")
     .get(admin_controller.getPosts);
 router.route("/admin/add-post")
     .get(admin_controller.getAddPost);
 router.route("/admin/posts/create")
       .post(admin_controller.postAddPost);
module.exports = router;