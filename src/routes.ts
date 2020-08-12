import express from 'express'
import ClassController from './controllers/ClassController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassController();
const connectionController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;