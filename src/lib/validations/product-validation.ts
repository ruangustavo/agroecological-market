import { z } from "zod";

export const productParamsSchema = z.object({
  id: z.string().uuid(),
});

export const productCreateSchema = z.object({
  image: z.string().url(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  quantity_in_stock: z.number(),
  unity_of_measurement: z.enum(["KG", "PACK", "UNIT"]).default("UNIT"),
});

export const productUpdateSchema = z.object({
  image: z.string().url().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  quantity_in_stock: z.number().optional(),
  unity_of_measurement: z.enum(["KG", "PACK", "UNIT"]).optional(),
});
