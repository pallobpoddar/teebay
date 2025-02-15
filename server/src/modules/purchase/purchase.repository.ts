import { Purchase } from "@prisma/client";
import { UUID } from "crypto";
import prisma from "../../config/prismaClient";

class PurchaseRepository {
  async createPurchase(productId: UUID, buyerId: UUID): Promise<Purchase> {
    const purchase = await prisma.purchase.create({
      data: {
        productId,
        buyerId,
      },
      include: {
        product: {
          include: {
            seller: true,
            categories: true,
          },
        },
        buyer: true,
      },
    });

    return purchase;
  }
}

export default new PurchaseRepository();
