import Button from "../atoms/Button";
import CardList from "../templates/CardList";
import { useState } from "react";
import Modal from "../organisms/Modal";
import { Link } from "react-router-dom";
import { GET_MY_PRODUCTS } from "../../graphql/queries/products";
import { Reference, StoreObject, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_LOCAL_USER } from "../../graphql/queries/users";
import { useApolloClient } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { toast, ToastContainer } from "react-toastify";
import { DELETE_PRODUCT } from "../../graphql/mutations/products";

const MyProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");
  const { data: user } = useQuery(GET_LOCAL_USER);
  const { data: productData } = useQuery(GET_MY_PRODUCTS, {
    variables: { sellerId: user?.localUser.id },
    fetchPolicy: "network-only",
  });
  const [deleteProduct, { error }] = useMutation(DELETE_PRODUCT, {
    update(cache, { data }) {
      if (data?.deleteProduct.success) {
        cache.modify({
          fields: {
            getProductsBySellerId(
              existingProducts = { data: [] },
              { readField }
            ) {
              return {
                ...existingProducts,
                data: existingProducts.data.filter(
                  (product: Reference | StoreObject) =>
                    readField("id", product) !== deleteProductId
                ),
              };
            },
          },
        });
      }
    },
  });

  if (error) {
    toast.error(error.message);
  }

  const products = productData?.getProductsBySellerId?.data || [];

  const client = useApolloClient();
  const navigate = useNavigate();

  const handleSignOut = () => {
    client.writeQuery({ query: GET_LOCAL_USER, data: { localUser: null } });
    navigate("/signin");
  };

  const handleConfirm = async () => {
    try {
      const { data } = await deleteProduct({
        variables: { deleteProductId: deleteProductId },
        fetchPolicy: "network-only",
      });

      if (data.deleteProduct.success) {
        setIsModalOpen(true);
      } else {
        toast.error(data.deleteProduct.message, { theme: "colored" });
      }
    } catch (err) {
      console.error("Error deleting product:", err);
    }
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    setDeleteProductId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <ToastContainer />
      {isModalOpen && (
        <Modal
          variant="delete"
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      )}
      <div className="flex justify-end gap-4 mx-6 my-4">
        <Link to={"/products"} className="text-blue">
          <Button
            text="ALL PRODUCTS"
            variant="button-primary"
            onClick={() => navigate("/products")}
          />
        </Link>
        <Link to={"/products/creation"} className="text-blue">
          <Button
            text="ADD PRODUCT"
            variant="button-primary"
            onClick={() => navigate("/products/creation")}
          />
        </Link>
        <Button
          text="LOGOUT"
          variant="button-secondary"
          onClick={handleSignOut}
        />
      </div>
      <CardList
        title="MY PRODUCTS"
        products={products}
        includeDelete
        onDelete={(id) => handleDelete(id)}
      />
    </>
  );
};

export default MyProducts;
