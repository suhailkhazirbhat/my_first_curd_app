const mongoose = require("mongoose");

//  "mongodb+srv://suhailbhatb7:suhail1234@cluster0.yzp1qql.mongodb.net/"
 const DB ="mongodb+srv://suhailbhatb7:suhail1234@cluster0.yzp1qql.mongodb.net/"


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));