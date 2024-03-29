import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayCRUD);
    router.get('/edit-crud', homeController.editCRUD);
    router.post('/put-crud', homeController.updateUserData);
    router.get('/delete-user', homeController.deleteUser);

    router.post('/api/login', userController.handleLogin);
    router.post('/api/get-all-users', userController.handleGetAllUsers);
    return app.use('/', router);
};
module.exports = initWebRoutes;
