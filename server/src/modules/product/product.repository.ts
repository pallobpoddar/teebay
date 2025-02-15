import { UUID } from "crypto";
import prisma from "../../config/prismaClient";
import { Product } from "@prisma/client";

class ProductRepository {
  async getAllProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany({
      include: {
        seller: true,
        categories: true,
      },
    });

    return products;
  }

  async createProduct(
    title: string,
    categoryIds: UUID[],
    description: string,
    price: number,
    rent: number,
    rentOption: "hr" | "day",
    sellerId: UUID
  ): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        title,
        categories: { connect: categoryIds.map((id: UUID) => ({ id })) },
        description,
        price,
        rent,
        rentOption,
        seller: { connect: { id: sellerId } },
      },
      include: {
        seller: true,
        categories: true,
      },
    });

    return product;
  }
}

export default new ProductRepository();
