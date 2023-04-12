import {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controller/user.controller.js";

export default async function routes(fastify) {
  fastify.post("/", createUser);
  fastify.get("/", getAllUsers);
  fastify.get("/:id", getUserById);
  fastify.put("/:id", updateUserById);
  fastify.delete("/:id", deleteUserById);
}
