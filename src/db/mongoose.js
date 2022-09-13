const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/kingburger', {
    useNewUrlParser: true
}).then(()=>{
    console.log("mongodb OK")
}).catch((error)=>{
    console.log("error"+error)
})