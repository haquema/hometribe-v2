// auth.routes.ts
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

router.post('/register', async (req, res) => {
  await authController.register(req, res);
});

router.get('/verify', async (req, res) => {
  await authController.verifyEmail(req, res);
});

export default router;