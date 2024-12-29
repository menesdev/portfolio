import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000'),
  MONGO_URI: z.string(),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});

const parsed = envSchema.safeParse({
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
});

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.toString());
  process.exit(1);
}

export const config = {
  port: parseInt(parsed.data.PORT),
  mongoUri: parsed.data.MONGO_URI,
  isDev: parsed.data.NODE_ENV === 'development',
};