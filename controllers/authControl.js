const users = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

async function signup(req, res) {
    const { first_name, last_name, email, password, country, acct_type } = req.body; //use req.body function o destructure the props of userModel
    //check if the user has been created
    //if user exist an error message is returned
    //prevents user duplication and errors
    console.log('running')
    try {
        //check if user exist
        const checkUserExist = await users.findOne({ email: email}).exec();
        // the findone function takes in an object of arg that would be the filter used to search the field req
        if (checkUserExist) {
            //this means there is a user
            return res.status(403).json({
                success: false,
                message: 'User already exists, login in'
            });
        }
        const hashedPassword = await bcrypt.hashSync(password, 10); //the agruments are the password and the number of characters used to hash the pword
        //save the user info
        const user = new users({ //create user by creating a instance of the userModel
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashedPassword,
            country: country,
            acct_type: acct_type
        });

        await user.save(); //wait for all the information of the user to be gotten then save the user

        return res.status(201).json({
            message: 'User saved successfully',
            success: true,
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json({  //err will be returned in json format
        error: err,
        success: false,
        Message: `An error occured while creating the user: ${err.message}`
        });
    }
};

async function login(req, res, next) {
    const { email, password } = req.body;

    const user = req.body;

    try {
        const checkUserExist = await users.findOne({email:email}).exec();
        // the findone function takes in an object of arg that would be the filter used to search the field user created using the userSchema
        if (!checkUserExist) {
            //this means  user is not in db
            return res.status(404).json({
                message: 'User does not exist, create an account',
                success: false,
            });
        }

        // const isCorrect = await bcrypt.compareSync(password, checkUserExist.password);

        // console.log('paswword_test: ', isCorrect);
        //if it is not the correct password a response is sent error
        if(!await bcrypt.compareSync(password, checkUserExist.password)){
            return res.status(403).json({
                data: null,
                message: 'Invalid credentials',
                success: false
            });
        }
        //store the user details in the token payload then use jwt for tis
        const tokenPayload = {
            email: checkUserExist.email,
            id: checkUserExist._id.toString(),
            acct_type: checkUserExist.acct_type
        }
        //jwt is used to ceate token
        //jwt.sign()expects arg to be either string or object
        //second arg is a secret key
        //third arg is when string expires
        const access_token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, { expiresIn: "5m"} );
        //if successful
        return res.status(202).json({
            message: "User login successful",
            success: true,
            access_token: access_token
        })
    } catch(error) {
            next(error)
          }
        }

//export two functions which would be exported in the object
module.exports = { signup, login }
