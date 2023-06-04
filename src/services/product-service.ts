import { ProductRepository } from "@/repositories/product-repository";
import { Prisma } from "@prisma/client";

export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async findAllProducts() {
    const products = await this.productRepository.findAll();
    return products;
  }

  async findProductById(id: string) {
    const product = await this.productRepository.findById(id);
    return product;
  }

  async create(data: Prisma.ProductCreateInput) {
    const product = await this.productRepository.create(data);
    return product;
  }

  async update(id: string, data: Prisma.ProductUpdateInput) {
    const product = await this.productRepository.update(id, data);
    return product;
  }

  async delete(id: string) {
    const result = await this.productRepository.delete(id);
    return result;
  }
}
