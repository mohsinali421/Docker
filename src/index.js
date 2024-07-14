import express from 'express'
const app = express()
import ENV from "dotenv"
ENV.config()

const PORT = process.env.PORT
app.get("/", (req,res) => {
    res.json("Welcome to Docker Servers!")
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})