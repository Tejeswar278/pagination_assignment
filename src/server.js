const app  = require("./index")

const connect = require("./config/db")

app.listen(5000,async function(){
    await connect();
    console.log("listening on port 5000")
})