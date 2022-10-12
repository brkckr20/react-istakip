const mongoose = require("mongoose");
const slugify = require("slugify");

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    slug: {
        type: String
    }
}, { timestamps: true });

CompanySchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next()
})

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;