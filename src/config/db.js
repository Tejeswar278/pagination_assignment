const mongoose = require("mongoose");
module.exports = () => {
    return mongoose.connect("mongodb+srv://epj:epj_2708@cluster0.uklfn.mongodb.net/?retryWrites=true&w=majority")
}