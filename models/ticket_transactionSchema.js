const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
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
    fee: {
        type: Number,
        required: true,
    },
    transaction_status: {
        type: String,
        enum: ['successful', 'pending', 'failed'],
        required: true,
    },
    no_of_purchase: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ticketSchema',
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
});
//call mongoose model 
const transactionModel = mongoose.model('ticket_transaction', transactionSchema);

//export the user in the database for CRUD operations
module.exports = transactionModel;