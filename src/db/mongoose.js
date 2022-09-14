const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
}).then(()=>{
    console.log("mongodb OK")
}).catch((error)=>{
    console.log("error"+error)
})