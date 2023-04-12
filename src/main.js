import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.register(userRoutes, { prefix: "/user" });
fastify.register(postRoutes, { prefix: "/post" });

// Run the server!
fastify.listen({ port: 5000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
