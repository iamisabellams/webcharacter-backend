const express = require('express')
const cors = require('cors')
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const characterRoutes = require("./routes/characterRoutes");
const authController = require("./controllers/authController");

app.use("/character", characterRoutes)
app.post("/login", authController.login)

app.get("/", (req, res) => {
    res.json({message: "Rodando"})
})

const PORT = process.env.PORT || 3000;
app.listen (PORT, () => {
    console.log("Funcionando")
})