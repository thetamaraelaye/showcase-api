const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

async function startDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Database is connected");
    } catch (error) {
        console.log("Unable to connect to db cluster", error.message) //error.message to know what error it is
    }
}

module.exports = startDB;