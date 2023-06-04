import { FastifyInstance } from "fastify";
import { makeProductController } from "@/factories/make-product-controller";

export async function productRoutes(app: FastifyInstance) {
  const productController = makeProductController();

  app.get("/", productController.findAllProducts);
  app.get("/:id", productController.findProductById);
  app.post("/", productController.create);
  app.put("/:id", productController.update);
  app.delete("/:id", productController.delete);
}
