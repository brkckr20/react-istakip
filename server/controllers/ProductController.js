const Product = require("../models/Product");
const User = require("../models/User");
let token;

exports.saveProduct = async (req, res) => {
    token = JSON.parse(req["headers"].authorization);
    let userId = token._id;
    const { meter, unitPrice, date, company } = req.body;
    try {
        const user = await User.findOne({ _id: userId });
        const values = {
            meter,
            unitPrice,
            date,
            company,
            amount: meter * unitPrice,
            user: userId
        }
        if (user) {
            const newProduct = new Product(values);
            await newProduct.save();
            res.status(200).json({
                message: "Kayıt işlemi başarılı",
                success: true
            })
        }
    } catch (error) {
        res.send(error)
    }

}