const Money = require("../models/Money");

let token;

exports.saveMoney = async (req, res) => {
    token = JSON.parse(req["headers"].authorization);
    let user_id = token._id;
    const { receivedMoney, description, company, date } = req.body;
    const values = {
        receivedMoney,
        description,
        company,
        date,
        user: user_id
    }
    try {
        const money = new Money(values);
        await money.save();
        res.status(200).json({
            message: "Kayıt işlemi başarılı.",
            success: true
        });
    } catch (error) {
        console.log(error)
    }
}

exports.getMoney = async (req, res) => {
    token = JSON.parse(req["headers"].authorization);
    let user_id = token._id;
    try {
        const moneys = await Money.find({ user: user_id });
        res.status(200).send(moneys);
    } catch (error) {
        console.log(error)
    }
}
exports.deleteMoney = async (req, res) => {
    const { id } = req.params;
    try {
        await Money.findByIdAndRemove(id);
        res.status(200).json({
            message: "Silme işlemi başarılı",
            success: true
        })
    } catch (error) {

    }
}