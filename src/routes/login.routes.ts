import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validate from '../middleware/login.middleware';

const router = Router();
router.post('/', validate.validatelogin, LoginController.create);

export default router;