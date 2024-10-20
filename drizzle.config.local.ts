import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".dev.vars" });

const config: Config = {
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};

export default config;
