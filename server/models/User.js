const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})


module.exports = mongoose.model("User", UserSchema);