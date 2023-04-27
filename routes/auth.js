const auth_router = require('express').Router();
const {
    signup, 
    login} = require('../controllers/authControl');

// create account is a post request
auth_router.post('/signup', signup);
// authRouter.post('/login', login);    
auth_router.post('/login', login);






//export the router
module.exports = auth_router;