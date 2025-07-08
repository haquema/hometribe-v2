import { Router } from "express";
import { AuthController } from '../controllers/auth.controller';
import { authenticateJWT } from '../middleware/auth.middleware';

const router = Router();
const authController = new AuthController();

router.get('/profile', authenticateJWT, async (req, res) => {
  await authController.getUser(req, res);
});

export default router;