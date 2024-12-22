import { z } from 'zod';

export const envSchema = z.object({
  VITE_API_KEY_GEO: z.string().transform((value) => value === 'true'),

});

export const env = envSchema.parse(import.meta.env);