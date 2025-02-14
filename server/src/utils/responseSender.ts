import { GraphQLError } from "graphql";

const sendSuccessResponse = (message: string, data?: Object) => {
  return {
    success: true,
    message,
    data,
  };
};

const sendErrorResponse = (error?: unknown) => {
  if (error instanceof GraphQLError) {
    return {
      success: false,
      message:error.message,
      error,
    };
  }

  return {
    success: false,
    message: "Internal Server Error",
    error,
  };
};

export { sendSuccessResponse, sendErrorResponse };
