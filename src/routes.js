import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import PaymentController from './app/controllers/PaymentController';
import CustomerController from './app/controllers/CustomerController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.store);

routes.get('/payments', PaymentController.index);
routes.post('/payments', PaymentController.store);
routes.put('/payments', PaymentController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);

export default routes;
