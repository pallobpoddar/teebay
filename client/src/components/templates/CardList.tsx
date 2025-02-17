import IProduct from "../../interfaces/IProduct";
import Card from "../organisms/Card";

type Props = {
  title: string;
  products: IProduct[];
  includeDelete?: boolean;
  onDelete?: (id: string) => void;
};

const CardList = (props: Props) => {
  return (
    <div className="mx-auto max-w-4/5 md:max-w-3/5">
      <h1 className="text-3xl text-jet-black text-center m-8">{props.title}</h1>
      <div className="flex flex-col gap-6">
        {props.products.map((product) => (
          <Card
            key={product.id}
            product={product}
            includeDelete={props.includeDelete}
            onDelete={(id) => props.onDelete && props.onDelete(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
