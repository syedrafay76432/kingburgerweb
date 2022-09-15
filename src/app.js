const express = require("express")
require('./db/mongoose')
const path = require("path");
const hbs = require("hbs")
const Contact = require("./models/contact");
const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))
app.set('view engine', "hbs")

app.get("/", (req, res) => {
    res.render('index')
})
app.post("/contact", async(req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.save()
        res.render('index')
        // console.log("here")
    } catch (error) {
        res.status(500).send(error)
    }
})
app.listen(port, () => {
    console.log("Port is on:  " + port)
})