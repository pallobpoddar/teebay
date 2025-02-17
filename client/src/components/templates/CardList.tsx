import IProduct from "../../interfaces/IProduct";
import Card from "../organisms/Card";

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

type Props = {
  title: string;
};

const CardList = (props: Props) => {
  return (
    <div className="mx-auto max-w-4/5 md:max-w-3/5">
      <h1 className="text-3xl text-jet-black text-center m-8">{props.title}</h1>
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
