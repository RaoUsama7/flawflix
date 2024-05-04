import express from 'express';
import PostMessage from '../models/postMessage.js';
const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const createPost = async (req, res) => {
  const { title, description, director, genre, imgUrl, videoUrl } = req.body;
  const newPostMessage = new PostMessage({
    title,
    description,
    director,
    genre,
    imgUrl,
    videoUrl,
  });

  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const getPostById = async (req, res) => {

  const requestedPostId = req.params.postId;

  try {
    const postMessages = await PostMessage.findOne({_id: requestedPostId});

    // PostMessage.findOne({_id: requestedPostId}, function(err, post){
    //   res.render("post", {
    //     title: post.title,
    //     content: post.content
    //   });
    // });



    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



export default router;
