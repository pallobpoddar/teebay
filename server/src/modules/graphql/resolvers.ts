import userResolvers from "../user/user.resolver";
import categoryResolvers from "../category/category.resolver";
import productResolvers from "../product/product.resolver";
import purchaseResolvers from "../purchase/purchase.resolver";
import rentalResolvers from "../rental/rental.resolver";

const resolvers = [
  userResolvers,
  categoryResolvers,
  productResolvers,
  purchaseResolvers,
  rentalResolvers,
];

export default resolvers;
