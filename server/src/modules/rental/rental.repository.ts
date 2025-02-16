import { UUID } from "crypto";
import prisma from "../../config/prismaClient";
import { Rental } from "@prisma/client";

class RentalRepository {
  async getRentalsByUserId(userId: UUID): Promise<Rental[]> {
    const rentals = await prisma.rental.findMany({
      where: {
        OR: [{ borrowerId: userId }, { product: { sellerId: userId } }],
      },
      include: {
        product: {
          include: {
            categories: true,
            seller: true,
          },
        },
        borrower: true,
      },
    });

    return rentals;
  }

  async createRental(
    productId: UUID,
    borrowerId: UUID,
    rentStartDate: Date,
    rentEndDate: Date
  ): Promise<Rental> {
    const rental = await prisma.rental.create({
      data: {
        productId,
        borrowerId,
        rentStartDate,
        rentEndDate,
      },
      include: {
        product: {
          include: {
            categories: true,
            seller: true,
          },
        },
        borrower: true,
      },
    });

    return rental;
  }
}

export default new RentalRepository();
