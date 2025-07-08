import * as z from "zod/v4";

export const registrationSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(12),
  name: z.string(),
  role: z.enum(["USER", "VENDOR"])
})

export type RegistrationInput = z.infer<typeof registrationSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(12),
});

export type LoginInput = z.infer<typeof loginSchema>;