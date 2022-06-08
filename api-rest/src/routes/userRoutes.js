import { Router } from 'express';
import userController from '../controllers/UserCrontroller';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);

export default router;

/**
 * index => lista todos os usuários => GET
 * store/create => cria um novo usuário => POST
 * delete => apaga um usuário => DELETE
 * show => mostra um usuário => GET
 * update => atualiza um usuário => PATCH (inteiro) OU PUT (parte)
 */
