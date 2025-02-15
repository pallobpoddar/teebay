import { UUID } from "crypto";

interface ProductArgs {
  title: string;
  categoryIds: UUID[];
  description: string;
  price: number;
  rent: number;
  rentOption: "hr" | "day";
  sellerId: UUID;
}

export { ProductArgs };
