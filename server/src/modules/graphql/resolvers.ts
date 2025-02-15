import userResolvers from "../user/user.resolver";
import categoryResolvers from "../category/category.resolver";
import productResolvers from "../product/product.resolver";

const resolvers = [userResolvers, categoryResolvers, productResolvers];

export default resolvers;
