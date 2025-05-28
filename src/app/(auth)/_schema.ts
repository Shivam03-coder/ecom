import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1).min(4).max(100),
  phoneNumber: z.string(),
  email: z.string().email(),
  password: z.string(),
  address: z.string().min(5).max(1000),
  city: z.string().min(1).min(2).max(100),
  pincode: z.string().min(1).min(6).max(6),
  country: z.tuple([z.string(), z.string().optional()]),
  isAccepted: z.unknown(),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
