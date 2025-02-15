import { Category } from "@prisma/client";
import categoryRepository from "./category.repository";

class CategoryService {
  async createCategories(names: string[]): Promise<Category[]> {
    const categories = await categoryRepository.createCategories(names);

    return categories;
  }
}

export default new CategoryService();
