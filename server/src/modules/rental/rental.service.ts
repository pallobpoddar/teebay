import { Rental } from "@prisma/client";
import { UUID } from "crypto";
import productRepository from "../product/product.repository";
import { GraphQLError } from "graphql";
import userRepository from "../user/user.repository";
import rentalRepository from "./rental.repository";

class RentalService {
  async createRental(
    productId: UUID,
    borrowerId: UUID,
    rentStartDate: Date,
    rentEndDate: Date
  ): Promise<Rental> {
    const product = await productRepository.findById(productId);
    if (!product) {
      throw new GraphQLError("Product not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const user = await userRepository.findById(borrowerId);
    if (!user) {
      throw new GraphQLError("User not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const rental = await rentalRepository.createRental(
      productId,
      borrowerId,
      rentStartDate,
      rentEndDate
    );

    return rental;
  }
}

export default new RentalService();
