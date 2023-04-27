//req the express module
const express = require('express');
const db = require('./configs/dbconfigs')
const dotenv = require("dotenv");
dotenv.config();
//create express app
const app = express();
//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//if the code is not for production use, access the key-value pairs in dotenv
console.log(process.env.PORT)
if (process.env.NODE_ENV !== "production") {
    console.log("Production")
};


//req a module that exports a router instance api routes
const auth_router = require('./routes/auth');
const user_router = require('./routes/users');
const events_router = require('./routes/events');


// const tickets_router = require('/routes/tickets');

//mount the route at specific paths on the main index file
// node 
app.use('/auth', auth_router);
app.use('/users',  user_router);
app.use('/events', events_router);
// app.use('/tickets', tickets_router);

// Start db
db()

//listening port
const PORT=process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
