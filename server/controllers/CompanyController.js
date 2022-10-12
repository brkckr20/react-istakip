const Company = require('../models/Company');

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
    try {
        const companies = await Company.find();
        res.send(companies)
    } catch (error) {
        console.log(error)
    }
}