//we need article model therefore require the model
const eventModel = require("../models/eventSchema");

async function createEvent(req,res, next){
    //need title and content from the FE
    const { description, location, event_type, category, frequency, start_date, start_time, end_date} = req.body;
    const user = req.user; //gets user details from authorisation
    console.log("user payload: ", user);

    try{

        if (description.length < 20 && location.length < 2) {
            res.json({
                message: 'Description must be at least 20 characters long while location must be at least 2 characters long',
                success: false
            });
        };
        //create event using schema
        const event = new eventModel({
            description: description,
            location: location,
            event_type: event_type,
            category: category,
            frequency: frequency,
            start_date: start_date,
            start_time: start_time,
            end_date: end_date,
            user_id: user.id
        });

        //save event
        await event.save();

        return res.json({
            message: 'Event saved successfully',
            success: true,
            event: description,
            status_code: 200
        })
    } catch(error){
        return res.json({
            message: `an error occured while creating the event, ${error.message} `,
            success: false,
            error: error
        });
    }
};


module.exports = {createEvent};
