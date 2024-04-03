const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/testDB').then((res) => {
    console.log("Connected to mongoDB");
}).catch((err) => {
    console.error("Error while connecting: ", err);
});

const userSchema = new Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;