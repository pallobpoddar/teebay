import prisma from "../../config/prismaClient";
import { User } from "@prisma/client";

class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: {
    name: string;
    address: string;
    email: string;
    phone: string;
    password: string;
  }) {
    return await prisma.user.create({
      data,
    });
  }
}

export default new UserRepository();
