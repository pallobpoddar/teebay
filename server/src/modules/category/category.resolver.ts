import { handleSuccess, handleError } from "../../utils/graphqlResponse";
import categoryService from "./category.service";

const categoryResolvers = {
  Query: {
    getAllCategories: async () => {
      try {
        const categories = await categoryService.getAllCategories();

        return handleSuccess("Successfully fetched categories", categories);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },

  Mutation: {
    createCategories: async (_: any, args: { names: string[] }) => {
      try {
        const { names } = args;

        const categories = await categoryService.createCategories(names);

        return handleSuccess("Successfully created categories", categories);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },
};

export default categoryResolvers;
