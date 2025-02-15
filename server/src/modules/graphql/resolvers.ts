import userResolvers from "../user/user.resolver";
import categoryResolvers from "../category/category.resolver";
import productResolvers from "../product/product.resolver";
import purchaseResolvers from "../purchase/purchase.resolver";

const resolvers = [
  userResolvers,
  categoryResolvers,
  productResolvers,
  purchaseResolvers,
];

export default resolvers;
