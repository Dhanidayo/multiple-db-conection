const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://localhost:27017/UserDb2');
const userModel2 = conn.model('User', require("../schema/userSchema"));

module.exports = userModel2;

//SUMMARY
//Created Connections and Model.
//Connected the model to the db connection.