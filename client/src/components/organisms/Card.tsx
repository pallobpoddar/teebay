import IProduct from "../../interfaces/IProduct";
import Button from "../atoms/Button";
import DeleteIcon from "../../assets/icons/delete-icon.svg?react";

type Props = {
  product: IProduct;
  includeDelete?: boolean;
  handleDelete?: (id: string) => void;
};

const Card = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2>{props.product.title}</h2>
        <Button
          className="cursor-pointer"
          onClick={() =>
            props.handleDelete && props.handleDelete(props.product.id)
          }
        >
          <DeleteIcon />
        </Button>
      </div>
      <p>
        Categories:{" "}
        {props.product.categories.map((category) => category.name).join(", ")}
      </p>
      <p>
        Price: ${props.product.price} | Rent: ${props.product.rent}{" "}
        {props.product.rentOption === "hr" ? "hourly" : "daily"}
      </p>
      <p>{props.product.description}</p>
      <div className="flex items-center justify-between">
        <p>
          Date posted: <>{props.product.createdAt}</>
        </p>
        <p>156 views</p>
      </div>
    </div>
  );
};

export default Card;
