const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: { 
        type: String,
        required: true,
    },
    last_name: {
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
    country: {
        type: String,
        enum: ['nigeria', 'ghana'],
        required: true,
    },
    created_at: { 
        type: Date, 
        default: Date.now(),
    },
    updated_at: { 
        type: Date, 
        default: Date.now(),
    },
    acct_type: { 
        type: String, 
        enum: ['individual', 'organization'], 
        required: true,
        default: 'individual',
    },
});
//call mongoose model 
const users = mongoose.model('users', userSchema);

//export the user in the database for CRUD operations
module.exports = users;