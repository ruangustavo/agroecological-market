import { ProductService } from "@/services/product-service";
import { Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

interface RequestParamsWithId {
  id: string;
}

export class ProductController {
  constructor(private productService: ProductService) {}

  findAllProducts = async () => {
    const products = await this.productService.findAllProducts();
    return { products };
  };

  findProductById = async (
    request: FastifyRequest<{ Params: RequestParamsWithId }>
  ) => {
    const { id } = request.params;
    const product = await this.productService.findProductById(id);
    return { product };
  };

  create = async (
    request: FastifyRequest<{ Body: Prisma.ProductCreateInput }>,
    reply: FastifyReply
  ) => {
    const data = request.body;
    const product = await this.productService.create(data);
    reply.status(201).send({ product });
  };

  update = async (
    request: FastifyRequest<{
      Params: RequestParamsWithId;
      Body: Prisma.ProductUpdateInput;
    }>
  ) => {
    const { id } = request.params;
    const data = request.body;
    const product = await this.productService.update(id, data);
    return { product };
  };

  delete = async (
    request: FastifyRequest<{ Params: RequestParamsWithId }>,
    reply: FastifyReply
  ) => {
    const { id } = request.params;
    await this.productService.delete(id);
    reply.status(204).send();
  };
}
