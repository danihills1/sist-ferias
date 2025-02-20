// routes/cadastroRoutes.ts
import { Router } from 'express';
import { login } from '../controllers/cadastroController';

const router = Router();

router.post('/login', login); // Rota de login

export default router;
