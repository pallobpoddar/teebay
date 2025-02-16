import { UUID } from "crypto";
import { handleError, handleSuccess } from "../../utils/graphqlResponse";
import purchaseService from "./purchase.service";

const purchaseResolvers = {
  Query: {
    getPurchasesByUserId: async (_: any, args: { userId: UUID }) => {
      try {
        const { userId } = args;

        const purchases = await purchaseService.getPurchasesByUserId(userId);

        return handleSuccess("Successfully fetched purchases", purchases);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },

  Mutation: {
    createPurchase: async (
      _: any,
      args: { productId: UUID; buyerId: UUID }
    ) => {
      try {
        const { productId, buyerId } = args;

        const purchase = await purchaseService.createPurchase(
          productId,
          buyerId
        );

        return handleSuccess("Successfully bought the product", purchase);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },
};

export default purchaseResolvers;
