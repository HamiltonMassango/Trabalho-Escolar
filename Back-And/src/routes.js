import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import FileController from './app/controllers/FileControllers';
import EmployeeController from './app/controllers/EmployeeControllers';
import ProductController from './app/controllers/ProductControllers';
import authMiddleware from './app/middlewares/auth';
import OrderControllers from './app/controllers/OrderControllers';

const router = new Router();
const upload = multer(multerConfig);

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);
router.use(authMiddleware);
router.put('/users', UserController.update);
router.get('/employee', EmployeeController.index);
router.post('/files', upload.single('file'), FileController.store);
router.post('/order', OrderControllers.store);
router.post('/product', ProductController.store);
router.get('/product', ProductController.index);

export default router;
