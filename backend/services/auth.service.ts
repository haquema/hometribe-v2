import { userRegistrationSchema, userRegistrationInput } from "../validation/user.validation";
import prisma from "../utils/prisma";
import { email } from "zod/v4";


export class AuthService {
  constructor() {}

  async registerUser(userInput: userRegistrationInput) {
    const result = await userRegistrationSchema.safeParse(userInput);
    if (!result.success) {
      return { success: false, errors: result.error.issues };
    }

    const emailExists = await prisma.user.findUnique({ where: { email: userInput.email }})
    if (emailExists) {
      // return { success: true, message: "If this email is not registered, you will receive a verification email." };
      return { success: false, errors: [{ message: "Email already registered" }] };
    }
  }

  private async hashPassword() {

  }

  private generateVerificationToken() {

  }

  async sendVerificationEmail() {

  }
} 