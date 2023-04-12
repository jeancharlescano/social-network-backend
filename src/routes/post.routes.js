import {
  getAllPosts,
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
} from "../controller/post.controller.js";

export default async function routes(fastify) {
  fastify.post("/", createPost);
  fastify.get("/", getAllPosts);
  fastify.get("/:id", getPostById);
  fastify.put("/:id", updatePostById);
  fastify.delete("/:id", deletePostById);
}
