// auth.routes.ts
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const authController = new AuthController();

router.post('/register', async (req, res) => {
  await authController.register(req, res);
});

router.get('/verify', async (req, res) => {
  await authController.verifyEmail(req, res);
});

router.post('/login', async (req, res) => {
  await authController.login(req, res);
});

router.get('/me', authenticateJWT, async (req, res) => {
  await authController.getUser(req, res);
});

export default router;