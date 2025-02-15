import { UUID } from "crypto";
import { handleError, handleSuccess } from "../../utils/graphqlResponse";
import purchaseService from "./purchase.service";

const purchaseResolvers = {
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

        return handleSuccess("Successfully created purchase", purchase);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },
};

export default purchaseResolvers;
