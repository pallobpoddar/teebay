import IProduct from "../../interfaces/IProduct";
import Button from "../atoms/Button";
import DeleteIcon from "../../assets/icons/delete-icon.svg?react";

type Props = {
  product: IProduct;
  onDelete?: (id: string) => void;
  onCardClick?: (product: IProduct) => void;
};

const Card = (props: Props) => {
  return (
    <article
      className="py-3 px-5 border-2 border-gray md:py-6 md:px-10 cursor-pointer"
      onClick={() => {
        props.onCardClick?.(props.product);
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-jet-black mb-3">{props.product.title}</h2>
        {props.onDelete && (
          <Button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              props.onDelete?.(props.product.id);
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
      {props.product.createdAt && (
        <div className="flex items-center justify-between text-slate-gray font-medium">
          <p>
            Date posted:{" "}
            <>{new Date(props.product.createdAt).toISOString().split("T")[0]}</>
          </p>
          <p>156 views</p>
        </div>
      )}
    </article>
  );
};

export default Card;
