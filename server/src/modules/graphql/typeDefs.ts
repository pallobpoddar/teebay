import { readFileSync } from "fs";
import path from "path";

const typeDefs = readFileSync(path.join(__dirname, "../user/user.schema.graphql"), "utf-8");

export default typeDefs;