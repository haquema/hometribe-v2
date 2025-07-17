import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: { id: string; role: string };
}

export function authenticateJWT(req: AuthRequest, res: Response, next: NextFunction): void {
  console.log('hello')
  console.log(req.cookies.token)
  const token = req.cookies.token; // get token from cookie
  if (!token) {
    res.status(401).json({ success: false, message: 'No token provided' });
    return;
  }
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    res.status(500).json({ success: false, message: 'JWT secret not configured' });
    return 
  }
  jwt.verify(token, secret, (err: jwt.VerifyErrors | null, user: any) => {
    if (err) return res.status(403).json({ success: false, message: 'Invalid token' });
    req.user = {
      id: user.userId,
      role: user.role
    };
    next();
  });
}