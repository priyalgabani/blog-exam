const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    price:String,
    userID:{type:mongoose.Schema.Types.ObjectId, ref:"user"}
})

let articaldata = mongoose.model("articaldata", blogSchema)

module.exports = articaldata