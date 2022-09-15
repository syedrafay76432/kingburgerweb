const mongoose = require('mongoose')
const validator = require('validator')

const Contact = mongoose.model('Contact', {
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                // throw new Error("Invalid email")
                alert("Email is incorrect")

            }
        }
    },
    PhoneNumber: {
        type: Number,
        required: true,
        min: 10
    },
    Adress: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Contact