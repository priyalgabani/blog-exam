
const articaldata = require("../models/article.schema");


const createdata = async (req, res) => {
    let data = await articaldata.create(req.body);
    res.send(data);
}

const createget = (req, res) => {
    res.render("article")
}

const getindex = (req, res) => {
    res.render("index")
}

const post =  async (req, res) => {
    let data = await articaldata.find({userID : req.body.userID});
    res.send(data);
}
const dllets =  async (req, res) => {
    await articaldata.findByIdAndDelete(req.params.id);
    let data = await articaldata.find({userID : req.body.userID});
    res.send(data);
}
const updates= async (req, res) => {
    let { id } = req.params;
    let data = await articaldata.findByIdAndUpdate(id, req.body);
    try {
        if (data) res.send("updated");
        else {
            res.send("not found");
        }
    } catch (error) {
        res.send("testing");
    }
};

const ups  =async (req,res)=>{
    const {id} = req.params;
    
    let udata = await articaldata.findById(id);
    res.render("update", {udata});
}
const alls =  async (req, res) => {
    let data = await articaldata.find();
    res.send(data);
}

module.exports = {createdata, createget, getindex,post , dllets ,updates ,ups ,alls }