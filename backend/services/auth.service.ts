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
    
    const hashedPassword = await this.hashPassword(userInput.password)
    const emailVerif = await this.generateVerificationToken();
    try {
      const createUser = await prisma.user.create({
        data: {
          email: userInput.email,
          hashedPassword: hashedPassword,
          name: userInput.name,
          emailVerificationToken: emailVerif.hashed,
          emailVerificationExpiresAt: emailVerif.expiry,
          role: userInput.role,
        }
      })
      console.log(`Verify at: http://yourdomain.com/verify?token=${emailVerif.raw}&email=${userInput.email}`);
      return { success: true, message: "Registration successful. Please check your email to verify your account." };
    } catch (err) {
      return { success: false, errors: [{ message: "Registration failed", details: err }] };
    }
  }

  private async hashPassword(unhashedPassword: string): Promise<string>  {
    const hashedUserPassword = await bcrypt.hash(unhashedPassword, 10);
    return hashedUserPassword;
  }

  private generateVerificationToken(): { raw: string; hashed: string; expiry: Date } {
    const rawToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex');
    const emailVerificationTokenExpires = new Date(Date.now() + 1000 * 60 * 60 * 24);
    return {
      raw: rawToken, 
      hashed: hashedToken,
      expiry: emailVerificationTokenExpires
    }
  }

  async sendVerificationEmail() {

  }
} 