const express = require("express");
const { model } = require("mongoose");

const User =  require("../models/user.model")

const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;
        const skip = (page-1)*pagesize;
        const tp  = Math.ceil((await User.find().countDocuments()) / pagesize);
        const users = await User.find().skip(skip).limit(pagesize).lean().exec();
        return res.status(200).send({users,tp})

    }catch (err){
        return res.status(500).json({message: err.message})
    }
})

module.exports = router;