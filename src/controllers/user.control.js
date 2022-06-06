const express = require("express");
const { model } = require("mongoose");

const User =  require("../models/user.model")

const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const users = await User.find().lean().exec();
        return res.status(200).send(users)

    }catch (err){
        return res.status(500).json({message: err.message})
    }
})

module.exports = router;