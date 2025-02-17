import IProduct from "../../interfaces/IProduct";
import Button from "../atoms/Button";
import DeleteIcon from "../../assets/icons/delete-icon.svg?react";
import { Link } from "react-router-dom";

type Props = {
  product: IProduct;
  includeDelete?: boolean;
  handleDelete?: (id: string) => void;
};

const Card = (props: Props) => {
  return (
    <article className="py-3 px-5 border-2 border-gray md:py-6 md:px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-jet-black mb-2">{props.product.title}</h2>
        {props.includeDelete && (
          <Button
            className="cursor-pointer"
            onClick={() =>
              props.handleDelete && props.handleDelete(props.product.id)
            }
          >
            <DeleteIcon />
          </Button>
        )}
      </div>
      <p className="text-slate-gray font-medium mb-2">
        Categories:{" "}
        {props.product.categories.map((category) => category.name).join(", ")}
      </p>
      <p className="text-slate-gray font-medium mb-2">
        Price: ${props.product.price} | Rent: ${props.product.rent}{" "}
        {props.product.rentOption === "hr" ? "hourly" : "daily"}
      </p>
      <p className="mb-2">
        {props.product.description.length > 300 ? (
          <>
            {props.product.description.slice(0, 300)}
            <Link
              to={`/product/${props.product.id}`}
              className="text-blue font-medium"
            >
              {" "}
              ... More Details
            </Link>
          </>
        ) : (
          props.product.description
        )}
      </p>
      <div className="flex items-center justify-between text-slate-gray font-medium">
        <p>
          Date posted: <>{props.product.createdAt.toDateString()}</>
        </p>
        <p>156 views</p>
      </div>
    </article>
  );
};

export default Card;
