import { UUID } from "crypto";

interface ProductCreationArgs {
  title: string;
  categoryIds: UUID[];
  description: string;
  price: number;
  rent: number;
  rentOption: "hr" | "day";
  sellerId: UUID;
}

interface ProductUpdateArgs {
  productId: UUID,
  title?: string;
  categoryIds?: UUID[];
  description?: string;
  price?: number;
  rent?: number;
  rentOption?: "hr" | "day";
}

export { ProductCreationArgs, ProductUpdateArgs };
