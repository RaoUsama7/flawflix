import  express  from "express";
import { getPosts,createPost,getPostById } from "../controllers/post.js";
const router =express.Router();

router.get('/', getPosts)
router.post('/', createPost)

router.get('/posts/:postId',getPostById)

export default router;