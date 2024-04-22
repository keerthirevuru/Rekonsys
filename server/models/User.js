const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const UserSchema = new Schema({
 username: {
    type: String,
    required: true,
 },
 email: {
    type: String,
    required: true,
    unique: true,
 },
 password: {
    type: String,
    required: true,
 },
});
// Compile the schema into a model
const User = mongoose.model('User', UserSchema);

module.exports = User;
