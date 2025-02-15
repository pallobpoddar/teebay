import { Product } from "@prisma/client";
import productRepository from "./product.repository";
import { UUID } from "crypto";
import userRepository from "../user/user.repository";
import { GraphQLError } from "graphql";
import categoryRepository from "../category/category.repository";

class ProductService {
  async getAllProducts(): Promise<Product[]> {
    const products = await productRepository.getAllProducts();

    return products;
  }

  async getProductsBySellerId(sellerId: UUID): Promise<Product[]> {
    const user = await userRepository.findById(sellerId);
    if (!user) {
      throw new GraphQLError("User not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const products = await productRepository.getProductsBySellerId(sellerId);

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
    const user = await userRepository.findById(sellerId);
    if (!user) {
      throw new GraphQLError("User not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const categories = await categoryRepository.getCategoriesByIds(categoryIds);
    if (categories.length !== categoryIds.length) {
      throw new GraphQLError("One or more categories not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const product = await productRepository.createProduct(
      title,
      categoryIds,
      description,
      price,
      rent,
      rentOption,
      sellerId
    );

    return product;
  }
}

export default new ProductService();
