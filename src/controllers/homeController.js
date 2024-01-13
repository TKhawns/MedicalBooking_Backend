import db from '../models/index';
import crudService from '../services/crud-service';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e);
    }
};

let getCRUD = async (req, res) => {
    try {
        return res.render('crud.ejs');
    } catch (e) {
        console.log(e);
    }
};

let postCRUD = async (req, res) => {
    await crudService.createNewUser(req.body);
    return res.send('CRUD');
};
let displayCRUD = async (req, res) => {
    let data = await crudService.getAllUser();
    return res.render('getUserData.ejs', {
        dataUser: data,
    });
};

let editCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let userData = await crudService.getUserById(id);
        return res.render('editUserData.ejs', { userData: userData });
    }
    return res.send('User not found');
};

let updateUserData = async (req, res) => {
    await crudService.updateUserData(req.body);
    return res.redirect('/get-crud');
    //return res.send('Update Successfully');
};

let deleteUser = async (req, res) => {
    await crudService.deleteUser(req.query.id);
    return res.redirect('/get-crud');
};
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    updateUserData: updateUserData,
    deleteUser: deleteUser,
};
