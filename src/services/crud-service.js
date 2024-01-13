import bcrypt from 'bcryptjs';
import db from '../models/index';
import { raw } from 'body-parser';

const salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashPassword(data.password);
            console.log(data);
            await db.User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashPasswordFromBcrypt,
                phone_number: data.phone_number,
                //image: '',
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleid: data.roleid,
                //positionId
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
let hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            let hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let usersData = db.User.findAll({ raw: true });
            resolve(usersData);
        } catch (e) {
            reject(e);
        }
    });
};
let getUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: userId }, raw: true });
            if (user) {
                resolve(user);
            }
            resolve([]);
        } catch (e) {
            reject(e);
        }
    });
};
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ where: { id: data.id } });
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phone_number = data.phone_number;

                // if raw: true, user.save() is error!
                await user.save();
            }

            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({
                where: {
                    id: id,
                },
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserById: getUserById,
    updateUserData: updateUserData,
    deleteUser: deleteUser,
};
