import fastify from "fastify";
import { productRoutes } from "./http/routes/product-routes";

export const app = fastify();

app.register(productRoutes, {
  prefix: "/products",
});
