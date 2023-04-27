const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    description: { 
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    location_tip: {
        type: String,
    },
    event_type: {
        type: String,
        enum: ['physical', 'virtual'],
        required: true,
    },
    virtual_meet_link: {
        type: String,
    },
    category: {
        type: String,
        enum: ['product_launch', 'product_review'],
        required: true,
    },
    custom_url: {
        type: String,
    },
    frequency: {
        type: String,
        enum: ['single', 'recurring'],
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    start_time: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,  
    },
    end_time: {
        type: Date,  
    },
    twitter_url: {
        type: String,
    },
    facebook_url: {
        type: String,
    },
    instagram_url: {
        type: String,
    },
    created_at: { 
        type: Date, 
        default: Date.now(),
    },
    updated_at: { 
        type: Date, 
        default: Date.now(),
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'userSchema',
        required: true,
    }
});
//call mongoose model 
const eventModel = mongoose.model('events', eventSchema);

//export the user in the database for CRUD operations
module.exports = eventModel;