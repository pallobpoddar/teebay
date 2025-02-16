import { UUID } from "crypto";
import prisma from "../../config/prismaClient";
import { Rental } from "@prisma/client";

class RentalRepository {
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
