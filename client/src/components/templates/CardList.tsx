import IProduct from "../../interfaces/IProduct";

type Props = {
  title: string;
};

const CardList = (props: Props) => {
  let products: IProduct[];
  return (
    <div>
      <h1>{props.title}</h1>
      
    </div>
  );
};

export default CardList;
