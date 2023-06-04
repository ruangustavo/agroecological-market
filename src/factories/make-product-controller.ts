import { PrismaProductRepository } from "@/repositories/prisma/prisma-product-repository";
import { ProductService } from "@/services/product-service";
import { ProductController } from "@/http/controllers/product-controller";

export function makeProductController(): ProductController {
  const productRepository = new PrismaProductRepository();
  const productService = new ProductService(productRepository);
  const productController = new ProductController(productService);
  return productController;
}
