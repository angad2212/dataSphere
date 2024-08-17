
const bcrypt = require('bcrypt'); //allows us to encrypt our password
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//whgen we get a password, we will encrypt it
//then when the user again tries to login, we will check that encypted password
//by salting it again and after making sure its the right one, we will give a
//json web token to the user
const register = async (req, res) => {
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        // Now we will be encrypting the password using bcrypt
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt); // Corrected from bcrpyt.hash to bcrypt.hash

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // Respond with the saved user in JSON format
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const login = async(req,res)=>{
    try{
        const{email, password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(400).json({
                message: 'user does not exist'
            })
        }

        //now we match the password, when the user has been found:
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                message: 'invalid credentials'
            })
        }

        //now the json web token
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    register,
    login
};