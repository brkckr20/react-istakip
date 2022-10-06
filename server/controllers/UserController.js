const User = require("../models/UserModel");
const bcrypt = require('bcryptjs');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users) {
            res.json({
                message: "İşlem başarılı.",
                users
            })
        } else {
            res.send("Users tablosu boş!");
        }
    } catch (error) {
        console.log(error);
    }
}


exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            res.status(400).json({
                message: "Bu kullanıcı adı daha önce alınmış"
            });
        }
        const newUser = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        res.status(200).json({
            message: "İşlem başarılı.",
            newUser
        })
    } catch (error) {
        console.log(error)
    }
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
}