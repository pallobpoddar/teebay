import { handleSuccess, handleError } from "../../utils/graphqlResponse";
import productService from "./product.service";
import { ProductArgs } from "./product.interfaces";

const productResolvers = {
  Query: {
    getAllProducts: async () => {
      try {
        const products = await productService.getAllProducts();

        return handleSuccess("Successfully fetched products", products);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },

  Mutation: {
    createProduct: async (_: any, args: ProductArgs) => {
      try {
        const {
          title,
          categoryIds,
          description,
          price,
          rent,
          rentOption,
          sellerId,
        } = args;

        const product = await productService.createProduct(
          title,
          categoryIds,
          description,
          price,
          rent,
          rentOption,
          sellerId
        );

        return handleSuccess("Successfully created product", product);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },
};

export default productResolvers;
