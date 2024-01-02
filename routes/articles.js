const {Router} = require("express");
const { createdata, post, alls, ups, updates, dllets } = require("../controllers/article.controllers");
const Auth = require("../middlewares/auth");

const article = Router();



article.post("/create" , Auth,createdata );
article.get("/post" ,Auth , post)
article.delete("/delete/:id",  dllets )  
article.get("/update/:id" ,  ups )  
article.patch("/edit/:id", updates) 
article.get("/alls" , alls )



module.exports = article