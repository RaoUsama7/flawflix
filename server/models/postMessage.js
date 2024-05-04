import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  director: String,
  genre: [String],
  selectedFile: String,
  imgUrl: String,
  videoUrl: String,
});


// postSchema.statics.findByPostId = function(postId) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch(`http://localhost:5000/${postId}`);
//       const post = await response.json();
//       resolve(post);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }


const PostMessage = mongoose.model("PostMessage",postSchema);

export default PostMessage;
