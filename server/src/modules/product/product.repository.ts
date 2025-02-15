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

  async getProductsBySellerId(sellerId: UUID): Promise<Product[]> {
    const products = await prisma.product.findMany({
      where: { sellerId },
      include: {
        seller: true,
        categories: true,
      },
    });

    return products;
  }

  async getProductById(id: UUID): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        seller: true,
        categories: true,
      },
    });

    return product;
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

  async updateProduct(
    id: UUID,
    title?: string,
    categoryIds?: UUID[],
    description?: string,
    price?: number,
    rent?: number,
    rentOption?: "hr" | "day"
  ): Promise<Product> {
    const product = await prisma.product.update({
      where: { id },
      data: {
        title,
        categories: { connect: categoryIds?.map((id: UUID) => ({ id })) },
        description,
        price,
        rent,
        rentOption,
      },
      include: {
        seller: true,
        categories: true,
      },
    });

    return product;
  }

  async deleteProduct(id: UUID): Promise<Product> {
    const product = await prisma.product.delete({
      where: { id },
      include: {
        seller: true,
        categories: true,
      },
    });

    return product;
  }
}

export default new ProductRepository();
