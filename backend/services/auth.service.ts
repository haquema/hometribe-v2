import { userRegistrationSchema, userRegistrationInput } from "../validation/user.validation";
import prisma from "../utils/prisma";
import bcrypt from 'bcrypt';
import crypto from 'crypto';


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

    const hashedUserPassword = await bcrypt.hash(userInput.password, 10);
    const rawToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex');
    const emailVerificationTokenExpires = new Date(Date.now() + 1000 * 60 * 60 * 24);
    
    try {
      const createUser = await prisma.user.create({
        data: {
          email: userInput.email,
          hashedPassword: hashedUserPassword,
          name: userInput.name,
          emailVerificationToken: hashedToken,
          emailVerificationExpiresAt: emailVerificationTokenExpires,
          role: userInput.role,
        }
      })
      return { success: true, message: "Registration successful. Please check your email to verify your account." };
    } catch (err) {
      return {err}
    }
    

    console.log(`Verify at: http://yourdomain.com/verify?token=${rawToken}&email=${userInput.email}`);
  }

  private async hashPassword() {

  }

  private generateVerificationToken() {

  }

  async sendVerificationEmail() {

  }
} 