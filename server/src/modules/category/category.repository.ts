import prisma from "../../config/prismaClient";
import { Category } from "@prisma/client";

class CategoryRepository {
  async createCategories(names: string[]): Promise<Category[]> {
    await prisma.category.createMany({
      data: names.map((name) => ({ name })),
      skipDuplicates: true,
    });

    const categories = await prisma.category.findMany({
      where: {
        name: { in: names },
      },
    });

    return categories;
  }
}

export default new CategoryRepository();
