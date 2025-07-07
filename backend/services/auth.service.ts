import { userRegistrationSchema, userRegistrationInput } from "../validation/user.validation";



export class AuthService {
  constructor() {}

  async registerUser(userInput: userRegistrationInput) {
    const result = await userRegistrationSchema.safeParse(userInput);
    if (!result.success) {
      return { success: false, errors: result.error.issues };
    }
  }

  private async hashPassword() {

  }

  private generateVerificationToken() {

  }

  async sendVerificationEmail() {

  }
} 