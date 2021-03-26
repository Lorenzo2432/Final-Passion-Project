const mongoose = require("mongoose");
const User = new mongoose.Schema({
    firstname: String,
    lastname: String,
    sport: String
}, {timestamps: true});
const userModel = mongoose.model('user_prfile', User);
module.exports = userModel;