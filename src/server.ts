import fastify from "fastify";
import { productRoutes } from "./http/routes/product-routes";
import { ZodError } from "zod";

export const app = fastify();

app.register(productRoutes, {
  prefix: "/products",
});

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  return reply.status(500).send({ message: "Internal server error." });
});
