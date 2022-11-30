const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    unitPrice: {
        type: Number,
    },
    meter: {
        type: Number
    },
    amount: {
        type: Number
    },
    company: {
        type: String
    },
    date: {
        type: Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product