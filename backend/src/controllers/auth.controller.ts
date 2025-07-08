import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import crypto from 'crypto';
import prisma from '../../utils/prisma';
import { loginSchema, registrationSchema } from '../../validation/user.validation';
import { AuthRequest } from '../middleware/auth.middleware';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async register(req: Request, res: Response) {
    const parseResult = registrationSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, errors: parseResult.error.issues });
    }
    try {
      const result = await this.authService.registerUser(parseResult.data);
      
      if (result.success) {
        return res.status(201).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        errors: [{ message: 'Internal server error' }] 
      });
    }
  }

  async verifyEmail(req: Request, res: Response) {
    const { token, email } = req.query; // or req.body if POST
  
    if (!token || !email) {
      return res.status(400).json({ success: false, errors: [{ message: "Missing token or email" }] });
    }
  
    const hashedToken = crypto.createHash('sha256').update(token as string).digest('hex');
  
    const user = await prisma.user.findFirst({
      where: {
        email: email as string,
        emailVerificationToken: hashedToken,
        emailVerificationExpiresAt: { gt: new Date() },
      }
    });
  
    if (!user) {
      return res.status(400).json({ success: false, errors: [{ message: "Invalid or expired token" }] });
    }
  
    await prisma.user.update({
      where: { email: email as string },
      data: {
        isEmailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpiresAt: null,
      }
    });

    return res.redirect('http://localhost:3000/welcome');
  }

  async login(req: Request, res: Response) {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, errors: parseResult.error.issues });
    }
    try {
      const result = await this.authService.loginUser(parseResult.data);
      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({ success: false, errors: [{ message: 'Internal server error' }] });
    }
  }

  async getUser(req: AuthRequest, res: Response) {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });
    const user = await this.authService.getUserById(userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    return res.status(200).json({ success: true, user });
  }
}