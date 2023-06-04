import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ProductRepository } from "../product-repository";

export class PrismaProductRepository implements ProductRepository {
  async findAll() {
    const products = await prisma.product.findMany();
    return products;
  }

  async findById(id: string) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async create({
    image,
    title,
    description,
    price,
    quantity_in_stock,
    unity_of_measurement,
  }: Prisma.ProductCreateInput) {
    const product = await prisma.product.create({
      data: {
        image,
        title,
        description,
        price,
        quantity_in_stock,
        unity_of_measurement,
      },
    });
    return product;
  }

  async update(
    id: string,
    {
      image,
      title,
      description,
      price,
      quantity_in_stock,
      unity_of_measurement,
    }: Prisma.ProductUpdateInput
  ) {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        image,
        title,
        description,
        price,
        quantity_in_stock,
        unity_of_measurement,
      },
    });
    return product;
  }

  async delete(id: string) {
    const result = await prisma.product.delete({
      where: {
        id,
      },
    });
    return !!result;
  }
}
