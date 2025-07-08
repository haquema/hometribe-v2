import { 
  RegistrationInput, registrationSchema,
  LoginInput, loginSchema
 } from "../../validation/user.validation";
import prisma from "../../utils/prisma";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { Resend } from "resend";
import jwt from 'jsonwebtoken';

const resend = new Resend(process.env.RESEND_API_KEY);


export class AuthService {
  constructor() {}

  async registerUser(userInput: RegistrationInput) {
    const result = await registrationSchema.safeParse(userInput);
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
      await this.sendVerificationEmail(userInput.email, emailVerif.raw, userInput.name);
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

  async sendVerificationEmail(email: string, token: string, name: string) {
    try {
      const verificationUrl = `http://localhost:3000/api/auth/verify?token=${token}&email=${email}`;
      
      await resend.emails.send({
        from: 'onboarding@resend.dev', // You'll need to verify this domain
        to: email,
        subject: 'Verify your HomeTribe account',
        html: `
          <h1>Welcome to HomeTribe!</h1>
          <p>Hi ${name},</p>
          <p>Please click the link below to verify your account:</p>
          <a href="${verificationUrl}">Verify Account</a>
          <p>This link will expire in 24 hours.</p>
        `
      });
      
      return { success: true, message: 'Verification email sent' };
    } catch (error) {
      return { success: false, errors: [{ message: 'Failed to send verification email' }] };
    }
  }

  async loginUser(loginInput: LoginInput) {
    // Validate input (already done in controller, but double-check for safety)
    const result = loginSchema.safeParse(loginInput);
    if (!result.success) {
      return { success: false, errors: result.error.issues };
    }
    const user = await prisma.user.findUnique({ where: { email: loginInput.email } });
    if (!user) {
      return { success: false, errors: [{ message: 'Invalid email or password' }] };
    }
    if (!user.isEmailVerified) {
      return { success: false, errors: [{ message: 'Email not verified' }] };
    }
    const passwordMatch = await bcrypt.compare(loginInput.password, user.hashedPassword);
    if (!passwordMatch) {
      return { success: false, errors: [{ message: 'Invalid email or password' }] };
    }
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'changeme',
      { expiresIn: '7d' }
    );
    return {
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    };
  }
} 