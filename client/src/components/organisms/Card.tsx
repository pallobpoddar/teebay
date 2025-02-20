import IProduct from "../../interfaces/IProduct";
import Button from "../atoms/Button";
import DeleteIcon from "../../assets/icons/delete-icon.svg?react";
import client from "../../apollo/apolloClient";
import { useNavigate } from "react-router-dom";
import { GET_SELECTED_PRODUCT } from "../../graphql/queries/products";

type Props = {
  product: IProduct;
  includeDelete?: boolean;
  onDelete?: (id: string, e: React.MouseEvent) => void;
};

const Card = (props: Props) => {
  const navigate = useNavigate();

  const handleCardClick = (product: IProduct) => {
    client.writeQuery({
      query: GET_SELECTED_PRODUCT,
      data: { selectedProduct: product },
    });
    navigate(`/products/${product.id}`);
  };

  return (
    <article
      className="py-3 px-5 border-2 border-gray md:py-6 md:px-10 cursor-pointer"
      onClick={() => handleCardClick(props.product)}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-jet-black mb-3">{props.product.title}</h2>
        {props.includeDelete && (
          <Button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              props.onDelete?.(props.product.id, e);
            }}
          >
            <DeleteIcon />
          </Button>
        )}
      </div>
      <p className="text-slate-gray font-medium mb-3">
        Categories:{" "}
        {props.product.categories.map((category) => category.name).join(", ")}
      </p>
      <p className="text-slate-gray font-medium mb-3">
        Price: ${props.product.price} | Rent: ${props.product.rent}{" "}
        {props.product.rentOption === "hr" ? "hourly" : "daily"}
      </p>
      <p className="mb-3">
        {props.product.description.length > 300 ? (
          <>
            {props.product.description.slice(0, 300)}{" "}
            <span className="text-blue font-medium">... More Details</span>
          </>
        ) : (
          props.product.description
        )}
      </p>
      <div className="flex items-center justify-between text-slate-gray font-medium">
        <p>
          Date posted:{" "}
          <>{new Date(props.product.createdAt).toISOString().split("T")[0]}</>
        </p>
        <p>156 views</p>
      </div>
    </article>
  );
};

export default Card;
