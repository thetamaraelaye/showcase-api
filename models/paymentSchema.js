const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    token: { 
        type: String,
        required: true,
    },
    user_id: {
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
    },
});
//call mongoose model 
const paymentModel = mongoose.model('payment_details', paymentSchema);

//export the user in the database for CRUD operations
module.exports = paymentModel;