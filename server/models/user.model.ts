// declare function require(name:string);
// import mongoose = require('mongoose')
import mongoose from "mongoose";

// define User Schema
const userSchema = new mongoose.Schema(
    {
    name: { type: String, require: true},
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true},
    },
    { collection: 'user-data' }
)
//  compiling schema to model
const User = mongoose.model('User', userSchema);

// module.exports = User
export default User;