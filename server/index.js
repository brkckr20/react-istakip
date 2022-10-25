const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();



/* MIDDLEWARES */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* ROUTES */
app.use("/users", require("./routes/UserRoute"));
app.use("/company", require("./routes/CompanyRoute"));
app.use("/product", require("./routes/ProductRoute"));



app.get("/", (req, res) => {
    res.send("Anasayfa");
})

const DB_CONN = process.env.DB_CONN;
const PORT = process.env.PORT || 5000;

mongoose.connect(`${DB_CONN}`, () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
    console.log("Mongo DBS bağlantısı başarılı");
}).catch(err => {
    console.log(err);
})