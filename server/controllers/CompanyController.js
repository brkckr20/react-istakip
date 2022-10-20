const Company = require('../models/Company');
let token;

exports.createCompany = async (req, res) => {
    try {
        const newCompany = new Company(req.body);
        await newCompany.save();
        res.status(200).json({
            message: "Kayıt işlemi başarılı",
            success: true
        })
    } catch (error) {
        res.send(error)
    }
}

exports.getAllCompany = async (req, res) => {
    token = JSON.parse(req["headers"].authorization);
    let id = token._id;
    try {
        const companies = await Company.find({user : id});
        res.send(companies)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteCompany = async (req, res) => {
    try {
        await Company.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message: "Silme işlemi başarılı",
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
}
