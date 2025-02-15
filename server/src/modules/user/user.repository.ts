import { UUID } from "crypto";
import prisma from "../../config/prismaClient";
import { User } from "@prisma/client";

class UserRepository {
  async findById(id: UUID): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async create(data: {
    name: string;
    address: string;
    email: string;
    phone: string;
    password: string;
  }) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}

export default new UserRepository();
