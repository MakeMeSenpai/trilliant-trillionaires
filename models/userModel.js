const mongoose = require("mongoose");

// js object on how users store their data in our database
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    displayName: { type: String },
})

// how we interact with any entries from user
module.exports = User = mongoose.model("user", userSchema);