const Post = require('../models/posts')
const User = require('../models/user')

const createPost = async(req,res)=>{
    try{
        const {userId, description, picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
          });
          await newPost.save();
      
          const post = await Post.find();
          res.status(201).json(post);
    }catch(err){
        res.status(409).json({
            message: err.message
        })
    }
}

const getFeedPosts = async(req,res)=>{
    try{
        const post = await Post.find(); //retrieves all documents from the Post collection in the database.
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({
            message: err.message
        })
    }
}

const getUserPosts = async(req,res)=>{
    try{
        const {userId} = req.params;
        const post = await Post.find({userId});
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({
            message: err.message
        })
    }
}

const likePost = async(req, res)=>{
    try{
        const {id} = req.params;
        const {userId} = req.body;
        const post = await Post.findBYId({id});
        const isLiked = Post.likes.find({userId});
        if (isLiked) { //checking if th epost has already been liked
            post.likes.delete(userId);
          } else {
            post.likes.set(userId, true);
          }
      
          const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
          );
      
          res.status(200).json(updatedPost);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

module.exports = {
    createPost,
    getFeedPosts,
    getUserPosts,
    likePost
};