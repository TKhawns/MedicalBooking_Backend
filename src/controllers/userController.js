import userService from '../services/user-service';
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // if miss/invalid password or email
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter',
        });
    }

    let userData = await userService.handleLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        userData: userData.userData,
    });
};

let handleGetAllUsers = async (req, res) => {
    let id = req.body.id; // all/id(1 user)
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        message: 'OK',
        users,
    });
};
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
};
