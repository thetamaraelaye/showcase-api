const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ticket_type: {
        type: String,
        enum: ['free', 'paid', 'invite_only'],
    },
    stock: {
        type: Number,
        enum: ['unlimited', 'limited'],
    },
    no_of_stock: {
        type: Number,
        required: true,
    },
    purchase_limit: {
        type: Number,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    event_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'userSchema',
        required: true,
    },
    created_at: { 
        type: Date, 
        default: Date.now(),
    },
    updated_at: { 
        type: Date, 
        default: Date.now(),
    }
});

//call mongoose model 
const ticketModel = mongoose.model('ticket', ticketSchema);

//export the user in the database for CRUD operations
module.exports = ticketModel;