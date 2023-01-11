import express from "express";
import APIController from "../controller/APIController"
let router = express.Router();

const initAPIRoute = (app) =>{
    router.get('/users', APIController.getAllUser); // method GET
    router.post('/create-user', APIController.createNewUser); //method POST
    router.put('/update-user', APIController.updateUser); //method PUT
    router.delete('/delete-user/:id', APIController.deleteUser); //method DELETE
    return app.use('/api/v1/', router)
}
module.exports = initAPIRoute;