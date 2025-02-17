import Button from "../atoms/Button";
import IProduct from "../../interfaces/IProduct";
import CardList from "../templates/CardList";
import { useState } from "react";
import Modal from "../organisms/Modal";

const products: IProduct[] = [
  {
    id: "1",
    title: "iPhone 13 pro max",
    categories: [{ id: "1", name: "Electronics" }],
    price: 1500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor est, molestie sit amet facilisis condimentum, lobortis eget sapien. Praesent viverra diam dui, non consequat dolor aliquam vitae. Nullam nulla diam, volutpat quis nulla ac, viverra molestie urna. Ut leo magna, pulvinar at pretium nec, sagittis eget purus. Nulla sit amet magna risus. Pellentesque ultrices enim odio, id molestie mi venenatis vel. Maecenas bibendum ipsum id turpis dictum euismod. Vestibulum pretium aliquet condimentum. Aliquam tempus aliquet erat et varius. Fusce nec justo luctus, iaculis lectus id, iaculis purus. Aenean ac nulla ac turpis consequat cursus. Vestibulum sed arcu a augue elementum posuere.\nUt at massa non felis tempor porta. Etiam non massa tristique, scelerisque erat ut, accumsan felis. Sed luctus varius vestibulum. Etiam vel leo leo. Vivamus mattis augue massa, sed hendrerit justo fringilla sed. Maecenas ac nulla orci. In feugiat feugiat eleifend. Aliquam vulputate bibendum egestas. Aliquam justo elit, pretium id lacus in, ultrices ultrices nibh. Integer eu dolor lorem. In eleifend varius purus non tempus. Sed eget semper ligula.",
    rent: 50,
    rentOption: "hr",
    createdAt: new Date("21st Sept 2021"),
  },
  {
    id: "2",
    title: "iPhone 13 pro slightly broken",
    categories: [{ id: "1", name: "Electronics" }],
    price: 700,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor est, molestie sit amet facilisis condimentum, lobortis eget sapien. Praesent viverra diam dui, non consequat dolor aliquam vitae. Nullam nulla diam, volutpat quis nulla ac, viverra molestie urna. Ut leo magna, pulvinar at pretium nec, sagittis eget purus. Nulla sit amet magna risus. Pellentesque ultrices enim odio, id molestie mi venenatis vel. Maecenas bibendum ipsum id turpis dictum euismod. Vestibulum pretium aliquet condimentum. Aliquam tempus aliquet erat et varius. Fusce nec justo luctus, iaculis lectus id, iaculis purus. Aenean ac nulla ac turpis consequat cursus. Vestibulum sed arcu a augue elementum posuere.\nUt at massa non felis tempor porta. Etiam non massa tristique, scelerisque erat ut, accumsan felis. Sed luctus varius vestibulum. Etiam vel leo leo. Vivamus mattis augue massa, sed hendrerit justo fringilla sed. Maecenas ac nulla orci. In feugiat feugiat eleifend. Aliquam vulputate bibendum egestas. Aliquam justo elit, pretium id lacus in, ultrices ultrices nibh. Integer eu dolor lorem. In eleifend varius purus non tempus. Sed eget semper ligula.",
    rent: 100,
    rentOption: "day",
    createdAt: new Date("21st Sept 2018"),
  },
];

const MyProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Button
          text="ADD PRODUCT"
          variant="button-primary"
          onClick={() => {}}
        />
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
