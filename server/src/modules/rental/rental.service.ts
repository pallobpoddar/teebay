import { Rental } from "@prisma/client";
import { UUID } from "crypto";
import productRepository from "../product/product.repository";
import { GraphQLError } from "graphql";
import userRepository from "../user/user.repository";
import rentalRepository from "./rental.repository";

class RentalService {
  async getRentalsByUserId(userId: UUID): Promise<Rental[]> {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new GraphQLError("User not found", {
        extensions: { code: "NOT_FOUND" },
      });
    }

    const rentals = await rentalRepository.getRentalsByUserId(userId);

    return rentals;
  }

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

    const existingRental = await rentalRepository.findByProductId(productId);
    if (existingRental) {
      throw new GraphQLError("Product is already rented", {
        extensions: { code: "CONFLICT" },
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
