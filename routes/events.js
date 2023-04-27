const events_router = require('express').Router();

// const {
//     createEvent
// } = require('../controllers/eventController');
// const verifyAuth = require('../middlewares/authMiddleware');

// // define the callback function for the /create route
// function handleCreateEvent(req, res, next) {
//     // your logic for creating an event goes here
//     createEvent();
// }

// // create account is a post request
// events_router.post('/create', verifyAuth, handleCreateEvent);
// // // authRouter.post('/login', login);    
// // authRouter.post('/login', function(req, res, next) {
// //     login
// // });
// module.exports = events_router;

const {
    createEvent
} = require('../controllers/eventController');
const verifyAuth = require('../middlewares/authMiddleware');

// define the callback function for the /create route
function handleCreateEvent(req, res) {
    // your logic for creating an event goes here
    createEvent();
}

// add the verifyAuth middleware and the callback function to the /create route
events_router.route('/create')
.post(verifyAuth, handleCreateEvent)


module.exports = events_router;

// new file


