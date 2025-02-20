import { Router } from 'express';
import * as cadastroController from '../controllers/cadastroController';

const router = Router();

router.get('/', cadastroController.getAll);
router.post('/', cadastroController.create);
router.get('/:id', cadastroController.getById);
router.put('/:id', cadastroController.update);
router.delete('/:id', cadastroController.remove);

export default router;
