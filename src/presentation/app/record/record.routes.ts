import { Router } from 'express';
import {
  RecordDataSourceImpl,
  RecordRepositoryImpl,
} from '../../../infraestructure';
import { RecordController } from './record.controller';
import { FileUploadMiddleware } from '../../middlewares';

export class RecordRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new RecordDataSourceImpl();
    const repository = new RecordRepositoryImpl(datasource);
    const controller = new RecordController(repository);

    router.post('/create', controller.createRecord);
    router.patch('/update', controller.updateRecord);
    router.get('/find-one/:id', controller.findOneById);
    router.get('/find-many', controller.findMany);
    router.patch('/change-status', controller.changeStatus);
    router.patch('/delete-pdf', controller.deleteFile);
    router.use(FileUploadMiddleware.containFiles);
    router.patch('/upload-pdf', controller.uploadFile);

    return router;
  }
}
