import {
  productCreateSchema,
  productParamsSchema,
  productUpdateSchema,
} from "@/lib/validations/product-validation";
import { ProductRepository } from "@/repositories/product-repository";
import { Prisma } from "@prisma/client";

export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async findAllProducts() {
    const products = await this.productRepository.findAll();
    return products;
  }

  async findProductById(id: string) {
    const validatedParams = productParamsSchema.parse({ id });
    const product = await this.productRepository.findById(validatedParams.id);
    return product;
  }

  async create(data: Prisma.ProductCreateInput) {
    const validatedData = productCreateSchema.parse(data);
    const product = await this.productRepository.create(validatedData);
    return product;
  }

  async update(id: string, data: Prisma.ProductUpdateInput) {
    const validatedParams = productParamsSchema.parse({ id });
    const validatedData = productUpdateSchema.parse(data);
    const product = await this.productRepository.update(
      validatedParams.id,
      validatedData
    );
    return product;
  }

  async delete(id: string) {
    const validatedParams = productParamsSchema.parse({ id });
    const result = await this.productRepository.delete(validatedParams.id);
    return result;
  }
}
