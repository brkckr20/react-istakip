const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

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
            return false;
        } else {
            const newUser = new User(req.body);
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(password, salt);
            await newUser.save();
            res.status(200).json({
                message: "İşlem başarılı.",
                success: true,
                newUser
            })
        }

    } catch (error) {
        console.log(error)
    }
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        res.send({ isSuccess: false })
    }
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id)
        })
    }
}


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
        expiresIn: '1h',
    })
}