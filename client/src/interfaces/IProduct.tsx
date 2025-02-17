interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  rent: number;
  rentOption: "hr" | "day";
  categories: {
    id: string;
    name: string;
  }[];
  createdAt: Date;
}

export default IProduct;
