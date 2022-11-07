const mongoose = require("mongoose");

const moneySchema = new mongoose.Schema({
    receivedMoney: {
        type: Number,
    },
    description: {
        type: String
    },
    company: {
        type: String
    },
    date: {
        type: Date,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });

const Money = mongoose.model("Money", moneySchema);

module.exports = Money