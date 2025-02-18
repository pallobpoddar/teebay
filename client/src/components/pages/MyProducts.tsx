import Button from "../atoms/Button";
import CardList from "../templates/CardList";
import { useState } from "react";
import Modal from "../organisms/Modal";
import { Link } from "react-router-dom";
import { GET_MY_PRODUCTS } from "../../graphql/queries/products";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_LOCAL_USER } from "../../graphql/queries/users";

const MyProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: user } = useQuery(GET_LOCAL_USER);
  const {
    loading,
    error,
    data: productData,
  } = useQuery(GET_MY_PRODUCTS, {
    variables: { sellerId: user?.localUser.id },
  });

  if (loading) console.log("loading");
  if (error) console.log(error);

  const products = productData?.getProductsBySellerId?.data || [];

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    console.log(id);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          variant="delete"
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          onClose={handleClose}
        />
      )}
      <div className="flex justify-end gap-4 mx-6 my-4">
        <Link to={"/products/creation"} className="text-blue">
          <Button
            text="ADD PRODUCT"
            variant="button-primary"
            onClick={() => {}}
          />
        </Link>
        <Button text="LOGOUT" variant="button-secondary" onClick={() => {}} />
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
