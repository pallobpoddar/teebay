import { UUID } from "crypto";
import rentalService from "./rental.service";
import { handleError, handleSuccess } from "../../utils/graphqlResponse";

const rentalResolvers = {
  Query: {
    getRentalsByUserId: async (_: any, args: { userId: UUID }) => {
      try {
        const { userId } = args;

        const rentals = await rentalService.getRentalsByUserId(userId);

        return handleSuccess("Successfully fetched rentals", rentals);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },

  Mutation: {
    createRental: async (
      _: any,
      args: {
        productId: UUID;
        borrowerId: UUID;
        rentStartDate: Date;
        rentEndDate: Date;
      }
    ) => {
      try {
        const { productId, borrowerId, rentStartDate, rentEndDate } = args;

        const rental = await rentalService.createRental(
          productId,
          borrowerId,
          rentStartDate,
          rentEndDate
        );

        return handleSuccess("Successfully rented the product", rental);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },
};

export default rentalResolvers;
