import { getAllUsers } from "../controller/user.controller.js";

export default async function routes(fastify) {
  fastify.get("/", getAllUsers);
}
