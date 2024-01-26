import bcrypt from 'bcryptjs/dist/bcrypt';
import db from '../models/index';
let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //check password
                let user = await db.User.findOne({
                    where: {
                        email: email,
                    },
                });
                // in fact, at time t isExist = true but at another time (t+1)/..., user can be deleted
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.message = 'OK';
                        userData.userData = user;
                    } else {
                        userData.errCode = 3;
                        userData.message = 'Incorrect password';
                        userData.userData = {};
                    }
                } else {
                    userData.errCode = 1;
                    userData.message = "Your email isn't exist";
                    userData.userData = {};
                }
                resolve(userData);
            } else {
                userData.errCode = 1;
                userData.message = "Your email isn't exist";
                userData.userData = {};
                resolve(userData);
            }
        } catch (e) {
            reject(e);
        }
    });
};
let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { email: email } });
            if (user) {
                resolve(true);
            }
            resolve(false);
        } catch (e) {
            reject(e);
        }
    });
};
let checkUserPassword = (unhashPassword) => {
    return new Promise(async (resolve, reject) => {
        try {
        } catch (e) {
            reject(e);
        }
    });
};

let getAllUsers = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (id === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password'],
                    },
                });
            } else if (id) {
                users = await db.User.findOne({
                    where: { id: id },
                    attributes: {
                        exclude: ['password'],
                    },
                });
            }
            console.log(users);
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    handleLogin: handleLogin,
    getAllUsers: getAllUsers,
};
