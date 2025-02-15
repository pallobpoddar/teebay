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
  id: UUID,
  title?: string;
  categoryIds?: UUID[];
  description?: string;
  price?: number;
  rent?: number;
  rentOption?: "hr" | "day";
}

export { ProductCreationArgs, ProductUpdateArgs };
