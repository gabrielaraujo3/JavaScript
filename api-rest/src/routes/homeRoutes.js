import { Router } from 'express';
import homeController from '../controllers/HomeCrontroller';

const router = new Router();

router.get('/', homeController.index);

export default router;
