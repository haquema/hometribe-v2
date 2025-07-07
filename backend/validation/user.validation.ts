import * as z from "zod/v4";

export const userRegistrationSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(12),
  name: z.string(),
  role: z.enum(["USER", "VENDOR"])
})

export type userRegistrationInput = z.infer<typeof userRegistrationSchema>;