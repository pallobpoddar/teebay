import { GraphQLError } from "graphql";

const handleSuccess = (message: string, data?: Object) => {
  return {
    success: true,
    message,
    data,
  };
};

const handleError = (error?: unknown) => {
  if (error instanceof GraphQLError) {
    return {
      success: false,
      message: error.message,
      error,
    };
  }

  return {
    success: false,
    message: "Internal Server Error",
    error,
  };
};

export { handleSuccess, handleError };
