const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://localhost:27017/UserDb1');
const userModel1 = conn.model('User', require("../schema/userSchema"));

module.exports = userModel1;

//SUMMARY
//Created Connections and Model.
//Connected the model to the db connection.