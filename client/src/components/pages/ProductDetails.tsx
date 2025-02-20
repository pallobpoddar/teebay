import { useState } from "react";
import ProductDetailsLayout from "../templates/ProductDetailsLayout";
import { toast } from "react-toastify";
import Modal from "../organisms/Modal";
import { useQuery } from "@apollo/client";
import { GET_SELECTED_PRODUCT } from "../../graphql/queries/products";

const ProductDetails = () => {
  const { data } = useQuery(GET_SELECTED_PRODUCT);
  const [modalVariant, setModalVariant] = useState<"buy" | "rent" | null>(null);

  const handleConfirm = async () => {
    // try {
    //   const { data } = await deleteProduct({
    //     variables: { deleteProductId: deleteProductId },
    //     fetchPolicy: "network-only",
    //   });
    //   if (data.deleteProduct.success) {
    //     setIsModalOpen(true);
    //   } else {
    //     toast.error(data.deleteProduct.message, { theme: "colored" });
    //   }
    // } catch (err) {
    //   console.error("Error deleting product:", err);
    // }
    // setIsModalOpen(false);
  };

  const handleClose = () => {
    // setIsModalOpen(false);
  };

  const handleRent = async () => {
    setModalVariant("rent");
    // setIsModalOpen(true);
  };

  const handleBuy = async () => {
    setModalVariant("buy");
    // setIsModalOpen(true);
  };

  return (
    <>
      {modalVariant && (
        <Modal
          variant={modalVariant}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      )}
      <ProductDetailsLayout
        product={data?.selectedProduct}
        handleRent={handleRent}
        handleBuy={handleBuy}
      />
    </>
  );
};

export default ProductDetails;
