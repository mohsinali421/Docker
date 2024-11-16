const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 3001
app.get("/", (req,res) => {
    res.json("Welcome to Docker Servers!")
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})