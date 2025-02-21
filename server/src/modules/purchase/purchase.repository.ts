import { Purchase } from "@prisma/client";
import { UUID } from "crypto";
import prisma from "../../config/prismaClient";

class PurchaseRepository {
  async findByProductId(productId: UUID): Promise<Purchase | null> {
    const purchase = await prisma.purchase.findUnique({
      where: { productId },
      include: {
        product: {
          include: {
            categories: true,
            seller: true,
          },
        },
        buyer: true,
      },
    });

    return purchase;
  }

  async getPurchasesByUserId(userId: UUID): Promise<Purchase[]> {
    const purchases = await prisma.purchase.findMany({
      where: {
        OR: [{ buyerId: userId }, { product: { sellerId: userId } }],
      },
      include: {
        product: {
          include: {
            categories: true,
            seller: true,
          },
        },
        buyer: true,
      },
    });

    return purchases;
  }

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
