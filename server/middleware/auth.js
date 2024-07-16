const jwt = require('jsonwebtoken');

const verifyToken = async(req,res,next)=>{ //this next is that the function can continue after using this verifyToken
    try{
        let token = req.header("Authorization");
        if(!token){
            res.status(403).send("access denied");
        }
        if(token.startsWith("Bearer")){
            token = token.slice(7, token.length).trimLeft(); //line removes the first 7 characters 
            //(the length of the string "Bearer ")
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    verifyToken
};