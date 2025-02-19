import IProduct from "../../interfaces/IProduct";
import CardList from "../templates/CardList";
import { GET_ALL_PRODUCTS } from "../../graphql/queries/products";
import { useQuery } from "@apollo/client";

const AllProducts = () => {
  const { data: productData } = useQuery(GET_ALL_PRODUCTS, {
    fetchPolicy: "network-only",
  });
  console.log(productData);
  const products: IProduct[] = productData?.getAllProducts?.data || [];

  return <CardList title="ALL PRODUCTS" products={products} />;
};

export default AllProducts;
