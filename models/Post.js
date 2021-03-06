const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema({
     title: {
         type: String,
         required: true
     },
     status: {
         type: String,
         default: "public"
     },
     description: {
         type: String,
         required: true
     },
     creationDate: {
         type: Date,
         default: Date.now()
     }
});

module.exports = mongoose.model('Post', postSchema)