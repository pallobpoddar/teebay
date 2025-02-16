import { readFileSync } from "fs";
import path from "path";

const userTypeDefs = readFileSync(
  path.join(__dirname, "../user/user.schema.graphql"),
  "utf-8"
);

const categoryTypeDefs = readFileSync(
  path.join(__dirname, "../category/category.schema.graphql"),
  "utf-8"
);

const productTypeDefs = readFileSync(
  path.join(__dirname, "../product/product.schema.graphql"),
  "utf-8"
);

const purchaseTypeDefs = readFileSync(
  path.join(__dirname, "../purchase/purchase.schema.graphql"),
  "utf-8"
);

const rentalTypeDefs = readFileSync(
  path.join(__dirname, "../rental/rental.schema.graphql"),
  "utf-8"
);

const typeDefs = `${userTypeDefs}\n${categoryTypeDefs}\n${productTypeDefs}\n${purchaseTypeDefs}\n${rentalTypeDefs}`;

export default typeDefs;
