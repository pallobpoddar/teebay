import { UUID } from "crypto";
import prisma from "../../config/prismaClient";
import { Category } from "@prisma/client";

class CategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }

  async getCategoriesByIds(ids: UUID[]): Promise<Category[]> {
    const categories = await prisma.category.findMany({
      where: { id: { in: ids } },
    });

    return categories;
  }

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
