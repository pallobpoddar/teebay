import { GraphQLError } from "graphql";
import userRepository from "./user.repository";
import {
  hashPassword,
  comparePasswords,
} from "../../utils/passwordSecurityHandler";
import { User } from "@prisma/client";

class UserService {
  async signUp(
    name: string,
    address: string,
    email: string,
    phone: string,
    password: string
  ): Promise<User> {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new GraphQLError("User already exists");
    }

    const hashedPassword = await hashPassword(password);

    const user = await userRepository.create({
      name,
      address,
      email,
      phone,
      password: hashedPassword,
    });

    return user;
  }

  async signIn(email: string, password: string): Promise<User> {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new GraphQLError("Incorrect email or password");
    }

    const checkPassword = await comparePasswords(password, user.password);
    if (!checkPassword) {
      throw new GraphQLError("Incorrect email or password");
    }

    return user;
  }
}

export default new UserService();
