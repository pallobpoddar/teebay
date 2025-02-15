import userService from "./user.service";
import { SignUpArgs } from "./user.interfaces";
import { handleSuccess, handleError } from "../../utils/graphqlResponse";

const userResolvers = {
  Mutation: {
    signUp: async (_: any, args: SignUpArgs) => {
      try {
        const { name, address, email, phone, password, confirmPassword } = args;

        if (password !== confirmPassword) {
          return handleError("Passwords do not match");
        }

        const user = await userService.signUp(name, address, email, phone, password);

        return handleSuccess("Successfully signed up. Please sign in", user);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },

    signIn: async (_: any, args: { email: string; password: string }) => {
      try {
        const { email, password } = args;

        const user = await userService.signIn(email, password);

        return handleSuccess("Successfully signed in", user);
      } catch (error) {
        console.error(error);
        return handleError(error);
      }
    },
  },
};

export default userResolvers;
