import userService from "./user.service";
import { SignUpArgs } from "./user.interfaces";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../../utils/responseSender";
import { GraphQLError } from "graphql";

const userResolvers = {
  Mutation: {
    signUp: async (_: any, args: SignUpArgs) => {
      try {
        const { name, address, email, phone, password, confirmPassword } = args;

        if (password !== confirmPassword) {
          return sendErrorResponse("Passwords do not match");
        }

        await userService.signUp(name, address, email, phone, password);

        return sendSuccessResponse("Signup successful. Please sign in");
      } catch (error) {
        console.error(error);
        return sendErrorResponse(error);
      }
    },
  },
};

export default userResolvers;
