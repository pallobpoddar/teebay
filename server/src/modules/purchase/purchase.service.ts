import { Purchase } from "@prisma/client";
import { UUID } from "crypto";
import productRepository from "../product/product.repository";
import { GraphQLError } from "graphql";
import userRepository from "../user/user.repository";
import purchaseRepository from "./purchase.repository";

class PurchaseService {
  async getPurchasesByUserId(userId: UUID): Promise<Purchase[]> {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new GraphQLError("User not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const purchases = await purchaseRepository.getPurchasesByUserId(userId);

    return purchases;
  }

  async createPurchase(productId: UUID, buyerId: UUID): Promise<Purchase> {
    const product = await productRepository.findById(productId);
    if (!product) {
      throw new GraphQLError("Product not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const user = await userRepository.findById(buyerId);
    if (!user) {
      throw new GraphQLError("User not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const purchase = await purchaseRepository.createPurchase(
      productId,
      buyerId
    );

    return purchase;
  }
}

export default new PurchaseService();
