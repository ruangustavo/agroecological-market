import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  throw new Error("⚠️ Invalid environment variables");
}

export const env = _env.data;
