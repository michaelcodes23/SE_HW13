const mongoose = require('mongoose');
const Schema = mongoose.schema;

const kingSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    messages: []
},{timestamps: true});

const User = mongoose.model('User', kingSchema);

//make this exportable to be accessed in 'server.js'
module.exports = User;