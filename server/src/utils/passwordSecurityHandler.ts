import bcrypt from "bcryptjs";

const hashPassword = async (password: string): Promise<string> => {
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePasswords = async (
  rawPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const result = await bcrypt.compare(rawPassword, hashedPassword);
  return result;
};

export { hashPassword, comparePasswords };
